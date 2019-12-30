<template>
  <div class="translatable-field" ref="main">
    <locale-tabs
      :detail="true"
      :locales="locales"
      :active-locale="activeLocale"
      @tabClick="locale => (activeLocale = locale)"
      @doubleClick="setAllLocale"
    />

    <component
      :is="'detail-' + field.translatable.original_component"
      :field="{ ...field, value: this.value[activeLocale] }"
      :class="{ 'remove-bottom-border': removeBottomBorder() }"
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
  props: ['resourceName', 'resourceId', 'resource', 'field'],
};
</script>
