<template>
  <div class="translatable-field">
    <locale-tabs :locales="locales" :active-locale="activeLocale" @tabClick="setLocale" @doubleClick="setAllLocale" />

    <div v-for="locale in locales" :key="locale.key">
      <component
        v-if="locale.key === activeLocale"
        :is="'form-' + field.translatable.original_component"
        :field="fakeField"
        :resource-name="resourceName"
      ></component>
    </div>
  </div>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';
import TranslatableField from '../mixins/TranslatableField';
import LocaleTabs from './LocaleTabs';

export default {
  components: { LocaleTabs },
  mixins: [HandlesValidationErrors, FormField, TranslatableField],
  props: ['field', 'resourceId', 'resourceName'],
  methods: {
    setInitialValue() {
      // Do nothing
    },

    fill(formData) {
      // Copy current value
      this.copyValueFromCurrentLocale();

      // Add value to FormData
      formData.append(this.field.attribute, JSON.stringify(this.value));
    },
  },
};
</script>
