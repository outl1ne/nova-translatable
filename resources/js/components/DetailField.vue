<template>
  <div class="translatable-field">
    <div class="_locale-tabs">
      <a v-for="locale in locales" :key="locale.key" @click="activeLocale = locale.key">
        {{ locale.name }}
      </a>
    </div>

    <component
      :is="'detail-' + field.translatable.original_component"
      :field="{ ...field, value: this.value[activeLocale] }"
      :resource-name="resourceName"
    ></component>
  </div>
</template>

<script>
import TranslatableField from '../mixins/TranslatableField';

export default {
  mixins: [TranslatableField],
  props: ['resourceName', 'field'],
};
</script>
