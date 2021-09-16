<?php

namespace OptimistDigital\NovaTranslatable\Fields;

use Laravel\Nova\Fields\BelongsToMany;
use OptimistDigital\NovaTranslatable\Rules\TranslaNotExactlyAttached;

class TranslaBelongsToMany extends BelongsToMany
{
    /**
     * Set allow same relation rules.
     *
     * @return $this
     */
    public function allowDuplicateRelations()
    {
        return $this->creationRules(function ($request) {
            return [
                new TranslaNotExactlyAttached($request, $request->findModelOrFail()),
            ];
        });
    }
}
