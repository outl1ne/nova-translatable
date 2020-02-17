<?php

namespace OptimistDigital\NovaTranslatable;

use Laravel\Nova\Http\Requests\NovaRequest;

trait HandlesTranslatable
{
    protected static function formatRules(NovaRequest $request, array $rules)
    {
        $rules = parent::formatRules($request, $rules);

        foreach ($rules as $attribute => $attributeRules) {
            if (empty($attributeRules['translatable'])) continue;

            foreach ($attributeRules['translatable'] as $locale => $localeRules) {
                $rules[str_replace('.*', '', $attribute) . ".{$locale}"] = $localeRules;
                unset($rules[$attribute]['translatable'][$locale]);
            }

            if (isset($rules[$attribute]['translatable'])) unset($rules[$attribute]['translatable']);
            if (empty($rules[$attribute])) unset($rules[$attribute]);
        }

        return $rules;
    }
}
