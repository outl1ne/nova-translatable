<template>
  <component
    :is="'index-' + field.translatable.original_component"
    :field="fields[activeLocale]"
    :translatable-locale="activeLocale"
    :resource-name="resourceName"
  />
</template>

<script>
import TranslatableField from '../mixins/TranslatableField';

export default {
  mixins: [TranslatableField],
  props: ['resourceName', 'resourceId', 'resource', 'field'],
};
</script>
