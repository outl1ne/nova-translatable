<template>
  <div class="translatable-field" ref="main">
    <locale-tabs
      :detail="true"
      :locales="locales"
      :active-locale="activeLocale"
      @tabClick="locale => (activeLocale = locale)"
      @doubleClick="setAllLocale"
    />

    <template v-if="fieldValueMustBeAnObject">
      <component
        v-for="locale in locales"
        :key="locale.key"
        v-if="locale.key === activeLocale && value[locale.key]"
        :is="'detail-' + field.translatable.original_component"
        :field="{ ...field, value: value[locale.key]}"
        :class="{ 'remove-bottom-border': removeBottomBorder() }"
        :resource-name="resourceName"
      ></component>
    </template>

    <template v-else>
      <component
        :is="'detail-' + field.translatable.original_component"
        :field="{ ...field, value: value[activeLocale]}"
        :class="{ 'remove-bottom-border': removeBottomBorder() }"
        :resource-name="resourceName"
      ></component>
    </template>
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
