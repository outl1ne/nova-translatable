<template>
  <LocaleSelect
    :detail="true"
    :active-locale="activeLocale"
    :locales="locales"
    :display-type="field.translatable.display_type"
    @localeChanged="setAllLocale"
  />
</template>

<script>
import TranslatableField from '../../mixins/TranslatableField';
import LocaleSelect from './LocaleSelect';

export default {
  components: { LocaleSelect },
  mixins: [TranslatableField],
  props: ['resourceName', 'resourceId', 'resource', 'field'],
};
</script>
