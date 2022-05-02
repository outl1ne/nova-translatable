<template>
  <LocaleSelect
    :detail="false"
    :active-locale="activeLocale"
    :locales="locales"
    :display-type="field.translatable.display_type"
    @localeChanged="setAllLocale"
  />
</template>

<script>
import { FormField } from 'laravel-nova';
import TranslatableField from '../../mixins/TranslatableField';
import LocaleSelect from './LocaleSelect';

export default {
  components: { LocaleSelect },
  mixins: [FormField, TranslatableField],
  props: ['resourceName', 'resourceId', 'resource', 'field'],
  methods: {
    fill(formData) {
      return;
    },
  },
};
</script>
