<?php

namespace OptimistDigital\NovaTranslatable;

use Laravel\Nova\Http\Requests\NovaRequest;

trait HandlesTranslatable
{
    /**
     * Override the default formatRules methods to add the translatable rulesFor functionality.
     *
     * @param \Laravel\Nova\Http\Requests\NovaRequest $request
     * @param array $rules
     *
     * @return array
     */
    protected static function formatRules(NovaRequest $request, array $rules)
    {
        $rules = parent::formatRules($request, $rules);

        foreach ($rules as $attribute => $attributeRules) {
            // We do not have single rules for translatable
            if (empty($attributeRules['translatable'])) {
                continue;
            }

            foreach ($attributeRules['translatable'] as $locale => $localeRules) {
                // We copy the locale rule into the rules array
                // i.e. ['name.fr' => ['required']]
                $rules[str_replace('.*', '', $attribute) . ".{$locale}"] =
                    array_merge(collect($attributeRules)->except('translatable')->toArray(), $localeRules);

                // We unset the translatable locale entry since we copy the rule into the rules array
                unset($rules[$attribute]['translatable'][$locale]);
            }

            // We unset the translatable entry once we lopped on each locale
            if (isset($rules[$attribute]['translatable'])) {
                unset($rules[$attribute]['translatable']);
            }

            // We unset the attribute entry if there is no other rule
            if (empty($rules[$attribute])) {
                unset($rules[$attribute]);
            }
        }

        $replacements = array_filter([
            '{{resourceId}}' => str_replace(['\'', '"', ',', '\\'], '', $request->resourceId),
        ]);

        if (empty($replacements)) {
            return $rules;
        }

        return collect($rules)->map(function ($rules) use ($replacements) {
            return collect($rules)->map(function ($rule) use ($replacements) {
                return is_string($rule)
                    ? str_replace(array_keys($replacements), array_values($replacements), $rule)
                    : $rule;
            })->all();
        })->all();
    }
}
