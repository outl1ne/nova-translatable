<template>
  <div class="translatable-field">
    <locale-tabs
      :detail="true"
      :locales="locales"
      :active-locale="activeLocale"
      @switchLocale="locale => (activeLocale = locale)"
    />

    <component
      :is="'detail-' + field.translatable.original_component"
      :field="{ ...field, value: this.value[activeLocale] }"
      :resource-name="resourceName"
    ></component>
  </div>
</template>

<script>
import TranslatableField from '../mixins/TranslatableField';
import LocaleTabs from './LocaleTabs';

export default {
  components: { LocaleTabs },
  mixins: [TranslatableField],
  props: ['resourceName', 'field'],
};
</script>
