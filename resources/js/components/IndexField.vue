<template>
  <component
    :is="'index-' + field.translatable.original_component"
    :field="fields[activeLocale]"
    :resource-name="resourceName"
  ></component>
</template>

<script>
import TranslatableField from '../mixins/TranslatableField';

export default {
  mixins: [TranslatableField],
  props: ['resourceName', 'resourceId', 'resource', 'field'],
};
</script>
