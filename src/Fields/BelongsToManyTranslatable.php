<?php

namespace Outl1ne\NovaTranslatable\Fields;

use Laravel\Nova\Fields\BelongsToMany;
use Outl1ne\NovaTranslatable\Rules\NotExactlyAttachedTranslatable;

class BelongsToManyTranslatable extends BelongsToMany
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
                new NotExactlyAttachedTranslatable($request, $request->findModelOrFail()),
            ];
        });
    }
}
