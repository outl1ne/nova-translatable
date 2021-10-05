<?php

namespace OptimistDigital\NovaTranslatable\Rules;

use Illuminate\Contracts\Validation\Rule;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Nova;

class TranslaNotExactlyAttached implements Rule
{
    /**
     * The request instance.
     *
     * @var \Laravel\Nova\Http\Requests\NovaRequest
     */
    public $request;

    /**
     * The model instance.
     *
     * @var \Illuminate\Database\Eloquent\Model
     */
    public $model;

    /**
     * Create a new rule instance.
     *
     * @param  \Laravel\Nova\Http\Requests\NovaRequest  $request
     * @param  \Illuminate\Database\Eloquent\Model  $model
     * @return void
     */
    public function __construct(NovaRequest $request, $model)
    {
        $this->model = $model;
        $this->request = $request;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $query = $this->model
            ->{$this->request->viaRelationship}()
            ->withoutGlobalScopes();

        $relatedModel = $query->getModel();

        $resource = with(Nova::resourceForModel($this->model), function ($resource) {
            return new $resource($this->model);
        });
        
        $resource->resolvePivotFields($this->request, $this->request->relatedResource)
            ->each(function ($field) use ($query) {
                if(is_array($this->request->input($field->attribute))){
//                     验证*
                    $pos = strrpos($field->attribute, '.*');
                    if ($pos !== false){
                        foreach($this->request->input($field->attribute) as $value){
                            $RuleAttribute = substr_replace($field->attribute, '', $pos, strlen('.*'));
                            
                            $query->wherePivot($RuleAttribute, $value);
                        }
                    }
                }else{
                    $query->wherePivot($field->attribute, $this->request->input($field->attribute));
                }
            });

        return ! in_array(
            $this->request->input($this->request->relatedResource),
            $query->pluck($relatedModel->getQualifiedKeyName())->all()
        );
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return trans('nova::validation.attached');
    }
}
