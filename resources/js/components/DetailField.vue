<template>
  <div class="translatable-field pt-2 border-t border-gray-100 dark:border-gray-700 -mx-6 px-6" ref="main">
    <LocaleTabs
      :detail="true"
      :attribute="field.attribute"
      :locales="locales"
      :active-locale="activeLocale"
      :display-type="field.translatable.display_type"
      @tabClick="locale => (activeLocale = locale)"
      @doubleClick="setAllLocale"
    />

    <div v-for="locale in locales" :key="locale.key">
      <component
        v-show="locale.key === activeLocale"
        :is="'detail-' + field.translatable.original_component"
        :field="fields[locale.key]"
        :translatable-locale="locale.key"
        :resource-name="resourceName"
      />
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

<style lang="scss" scoped>
.translatable-field {
  .flex.border-t {
    border-style: none !important;
  }
}
</style>
