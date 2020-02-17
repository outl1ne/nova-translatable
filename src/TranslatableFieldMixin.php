<?php

namespace OptimistDigital\NovaTranslatable;

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
                    $value = $resource->getTranslations($attribute);
                } else if (is_string($value)) {
                    $value = json_decode($value);
                }

                $value = (array) $value;

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
                if (in_array(request()->method(), ['PUT', 'POST'])) {
                    $this->attribute = "{$this->attribute}.*";
                }

                return $this->resolveAttribute($resource, $attribute);
            });

            $this->fillUsing(function ($request, $model, $attribute, $requestAttribute) {
                $realAttribute = FieldServiceProvider::normalizeAttribute($this->meta['translatable']['original_attribute'] ?? $attribute);

                $value = $request->{$realAttribute};
                $translations = is_string($value) ? (array) json_decode($value) : $value;

                if (method_exists($model, 'setTranslations')) {
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
            $this->rules['translatable'][$locale] = $rules;
            return $this;
        };
    }
}
