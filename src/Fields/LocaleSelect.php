<?php

namespace Outl1ne\NovaTranslatable\Fields;

use Laravel\Nova\Fields\Field;
use Outl1ne\NovaTranslatable\FieldServiceProvider;

class LocaleSelect extends Field
{
    public $component = 'locale-select-field';

    public $showOnIndex = false;

    protected $translatableMeta = [];

    public function __construct()
    {
        parent::__construct(null, null, null);

        $this->translatableMeta = [
            'locales' => FieldServiceProvider::getLocales(),
            'displayType' => config('nova-translatable.locale_select.display_type')
        ];

        return $this->setTranslatableMeta();
    }

    /**
     * @param array|callable $locales
     */
    public function setLocales($locales): self
    {
        $this->translatableMeta['locales'] = FieldServiceProvider::getLocales($locales);
        return $this->setTranslatableMeta();
    }

    public function setDisplayType(string $type): self
    {
        $this->translatableMeta['displayType'] = $type;
        return $this->setTranslatableMeta();
    }

    private function setTranslatableMeta(): self
    {
        return $this->withMeta(['translatable' => $this->translatableMeta]);
    }
}
