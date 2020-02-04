<template>
  <div class="translatable-field" ref="main">
    <locale-tabs
      :detail="true"
      :locales="locales"
      :active-locale="activeLocale"
      @tabClick="locale => (activeLocale = locale)"
      @doubleClick="setAllLocale"
    />

    <div v-for="locale in locales" :key="locale.key">
      <component
        v-show="locale.key === activeLocale"
        :is="'detail-' + field.translatable.original_component"
        :field="fields[locale.key]"
        :class="{ 'remove-bottom-border': removeBottomBorder() }"
        :resource-name="resourceName"
      ></component>
    </div>
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
