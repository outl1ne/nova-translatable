<?php

namespace Outl1ne\NovaTranslatable;

use Exception;
use Illuminate\Support\Arr;
use Laravel\Nova\Fields\Markdown;
use Laravel\Nova\Fields\Textarea;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Http\Requests\NovaRequest;

class TranslatableFieldMixin
{
    public bool $__translatable = false;

    public function translatable()
    {
        return function ($overrideLocales = [], $options = []) {
            $locales = FieldServiceProvider::getLocales($overrideLocales);
            $component = $this->component;
            $this->__translatable = true;

            $originalResolveCallback = $this->resolveCallback;
            $this->resolveUsing(function ($value, $resource, $attribute) use ($locales, $component, $originalResolveCallback, $options) {
                if ($originalResolveCallback) $this->resolveCallback = $originalResolveCallback;
                $attribute = FieldServiceProvider::normalizeAttribute($attribute);

                // Load value from either the model or from the given $value
                if (isset($resource) && (is_object($resource) || is_string($resource)) && method_exists($resource, 'getTranslations')) {
                    // In case a model has the HasTranslations trait, but some fields are wrapped
                    // we must be prepared to get an Exception here
                    try {
                        $value = $resource->getTranslations($attribute);
                    } catch (Exception $e) {
                        $value = [];
                    }
                }

                if (empty($value)) {
                    $value = data_get($resource, str_replace('->', '.', $attribute)) ?? [];
                }

                try {
                    if (!is_array($value)) {
                        if (is_object($value)) {
                            $value = (array) $value;
                        } else {
                            $testValue = json_decode($value, true);
                            if (is_array($testValue)) $value = $testValue;
                        }
                    }
                } catch (Exception $e) {
                }

                if (!empty($value)) {
                    $value = array_map(function ($val) {
                        return !is_numeric($val) || (is_string($val) && ($val[0] === '0' || $val[0] === '+')) ? $val : (float) $val;
                    }, (array) $value);
                }

                // Nova 2.9 support
                $request = app(NovaRequest::class);
                $defaultValue = method_exists($this, 'resolveDefaultValue') ? $this->resolveDefaultValue($request) : '';

                $prioritizeNovaLocale = isset($options['prioritizeNovaLocale'])
                    ? $options['prioritizeNovaLocale']
                    : config('nova-translatable.prioritize_nova_locale', true);

                $displayType = isset($options['displayType'])
                    ? $options['displayType']
                    : config('nova-translatable.display_type', 'row');

                $fillOtherLocalesFrom = isset($options['fillOtherLocalesFrom'])
                    ? $options['fillOtherLocalesFrom']
                    : config('nova-translatable.fill_other_locales_from', null);

                if($this instanceof Text && !$this instanceof Number) {
                    foreach ($value as $key => $val) {
                        $value[$key] = ( $val === null ? null : (string) $val );
                    }
                }

                $translatable = [
                    'original_attribute' => $this->attribute,
                    'original_component' => $component,
                    'locales' => $locales,
                    'value' => $value ?: $defaultValue,
                    'prioritize_nova_locale' => $prioritizeNovaLocale,
                    'display_type' => $displayType,
                ];

                if ($this instanceof Markdown) {
                    $translatable['previewFor'] = $translatable['value'] ? Arr::map($translatable['value'], fn ($value) => $this->previewFor($value)) : [];
                }

                $this->withMeta(['translatable' => $translatable]);

                $this->component = 'translatable-field';

                // If it's a CREATE or UPDATE request, we need to trick the validator a bit
                $hasValidationTrick = property_exists($this, '__validationTrick') && $this->__validationTrick;
                if (in_array(request()->method(), ['PUT', 'POST']) && !$hasValidationTrick) {
                    $translations = $request->{$this->attribute};
                    if (!empty($fillOtherLocalesFrom) && !empty($translations[$fillOtherLocalesFrom])) {
                        foreach ($locales as $localeKey => $localeName) {
                            if (empty($translations[$localeKey])) $translations[$localeKey] = $translations[$fillOtherLocalesFrom];
                        }
                    }
                    $request->merge([$this->attribute => $translations]);

                    $this->attribute = "{$this->attribute}.*";
                    $this->__validationTrick = true;
                }

                if ($originalResolveCallback) return $this->resolve($resource, $attribute);
            });

            $originalDisplayCallback = $this->displayCallback;
            $this->displayUsing(function ($value, $resource, $attribute) use ($originalDisplayCallback) {
                $this->displayCallback = $originalDisplayCallback;

                /**
                 * Avoid calling resolveForDisplay on the main Textarea instance as it contains a call to e()
                 * and it only accepts string, passing an array will cause a crash
                 */
                if ($this instanceof Textarea) {
                    $this->displayCallback = null;
                    parent::resolveForDisplay($resource, $attribute);

                    if (is_string($value)) return $value;
                    return collect(array_values((array) ($value ?? [])))->filter()->first() ?? '';
                }

                $this->resolveForDisplay($resource, $attribute);
                return $value;
            });

            $this->fillUsing(function ($request, $model, $attribute, $requestAttribute) use ($locales) {
                $realAttribute = FieldServiceProvider::normalizeAttribute($this->meta['translatable']['original_attribute'] ?? $attribute);
                $value = $request->{$realAttribute};
                $translations = is_string($value) ? json_decode($value, true) : $value;

                $isTranslatableAttribute = method_exists($model, 'isTranslatableAttribute') && $model->isTranslatableAttribute($realAttribute);
                if ($isTranslatableAttribute && is_array($translations)) {
                    $model->setTranslations($realAttribute, $translations);
                } else {
                    $model->{$realAttribute} = $translations;
                }
            });

            return $this;
        };
    }

    public function rulesFor()
    {
        return function ($locales, $rules) {
            $setRule = function ($locale, $rules) {
                if (!in_array($locale, array_keys(FieldServiceProvider::getLocales()))) {
                    throw new Exception("Invalid locale specified ({$locale})");
                }

                if (!is_array($rules)) $rules = [$rules];

                $this->rules['translatable'][$locale] = $rules;
                return $this;
            };

            if (is_callable($locales)) $locales = call_user_func($locales);

            // Array of locales or callable rules
            if (is_array($locales) || is_callable($rules)) {
                // Single locale with callable rules
                if (!is_array($locales)) return $setRule($locales, call_user_func($rules, $locales));
                foreach ($locales as $locale) {
                    $_rules = $rules;
                    if (is_callable($_rules)) $_rules = call_user_func($rules, $locale);
                    $setRule($locale, $_rules);
                }

                return $this;
            }

            $setRule($locales, $rules);
            return $this;
        };
    }
}
