<?php

namespace OptimistDigital\NovaTranslatable;

use Exception;
use Laravel\Nova\Fields\Textarea;

class TranslatableFieldMixin
{
    public function translatable()
    {
        return function ($overrideLocales = []) {
            $locales = FieldServiceProvider::getLocales($overrideLocales);
            $component = $this->component;

            $this->resolveUsing(function ($value, $resource, $attribute) use ($locales, $component) {
                $attribute = FieldServiceProvider::normalizeAttribute($attribute);

                // Load value from either the model or from the given $value
                if (isset($resource) && method_exists($resource, 'getTranslations')) {
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

                $value = array_map(function ($val) {
                    return !is_numeric($val) ? $val : (float) $val;
                }, (array) $value);

                $this->withMeta([
                    'translatable' => [
                        'original_attribute' => $this->attribute,
                        'original_component' => $component,
                        'locales' => $locales,
                        'value' => $value
                    ],
                ]);

                $this->component = 'translatable-field';

                // If it's a CREATE or UPDATE request, we need to trick the validator a bit
                $hasValidationTrick = property_exists($this, '__validationTrick') && $this->__validationTrick;
                if (in_array(request()->method(), ['PUT', 'POST']) && !$hasValidationTrick) {
                    $this->attribute = "{$this->attribute}.*";
                    $this->__validationTrick = true;
                }

                return $this->resolveAttribute($resource, $attribute);
            });

            $originalDisplayCallback = $this->displayCallback;
            $this->displayUsing(function ($value, $resource, $attribute) use ($originalDisplayCallback) {
                $this->displayCallback = $originalDisplayCallback;

                /**
                 * Avoid calling resolveForDisplay on the main Textarea instance as it contains a call to e()
                 * and it only accepts string, passing an array will cause a crash
                 */
                if ($this instanceof Textarea) {
                    return parent::resolveForDisplay($resource, $attribute);
                }

                return $this->resolveForDisplay($resource, $attribute);
            });

            $this->fillUsing(function ($request, $model, $attribute, $requestAttribute) {
                $realAttribute = FieldServiceProvider::normalizeAttribute($this->meta['translatable']['original_attribute'] ?? $attribute);
                $value = $request->{$realAttribute};
                $translations = is_string($value) ? (array) json_decode($value) : $value;

                if (method_exists($model, 'setTranslations') && is_array($translations)) {
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
        return function ($locale, $rules) {
            if (!in_array($locale, array_keys(FieldServiceProvider::getLocales()))) {
                throw new Exception("Invalid locale specified ({$locale})");
            }

            $this->rules['translatable'][$locale] = $rules;
            return $this;
        };
    }
}
