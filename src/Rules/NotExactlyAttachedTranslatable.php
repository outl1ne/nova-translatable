<?php

namespace Outl1ne\NovaTranslatable\Rules;

use Laravel\Nova\Nova;
use Laravel\Nova\Rules\NotExactlyAttached;

class NotExactlyAttachedTranslatable extends NotExactlyAttached
{
    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $query = $this->model->{$this->request->viaRelationship}()->withoutGlobalScopes();
        $relatedModel = $query->getModel();

        $resource = with(Nova::resourceForModel($this->model), function ($resource) {
            return new $resource($this->model);
        });

        $resource->resolvePivotFields($this->request, $this->request->relatedResource)
            ->each(function ($field) use ($query) {
                if (isset($field->__translatable)) {
                    $pos = strrpos($field->attribute, '.*');
                    if ($pos !== false) {
                        $realAttribute = substr_replace($field->attribute, '', $pos, strlen('.*'));
                        $values = $this->request->{$realAttribute};

                        foreach ($values as $locale => $value) {
                            $ruleAttribute = "{$realAttribute}->{$locale}";
                            $query->wherePivot($ruleAttribute, $value);
                        }
                        return $query;
                    }
                }

                $query->wherePivot($field->attribute, $this->request->input($field->attribute));
            });

        return !in_array(
            $this->request->input($this->request->relatedResource),
            $query->pluck($relatedModel->getQualifiedKeyName())->all()
        );
    }
}
