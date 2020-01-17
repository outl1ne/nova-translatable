<template>
  <div class="translatable-field" ref="main">
    <locale-tabs
      :locales="locales"
      :active-locale="activeLocale"
      :errors="errors"
      :error-attributes="errorAttributes"
      @tabClick="setLocale"
      @doubleClick="setAllLocale"
    />

    <div v-for="locale in locales" :key="locale.key">
      <component
        v-if="locale.key === activeLocale"
        :is="'form-' + field.translatable.original_component"
        :field="fakeField"
        :resource-name="resourceName"
        :errors="errors"
        :class="{ 'remove-bottom-border': removeBottomBorder() }"
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
      for (const locale of this.locales) {
        formData.append(`${this.field.attribute}[${locale.key}]`, this.value[locale.key]);
      }
    },
  },
  computed: {
    errorAttributes() {
      const locales = this.locales;
      const errorAttributes = {};
      for (const locale of locales) {
        errorAttributes[locale.key] = `${this.field.attribute}.${locale.key}`;
      }
      return errorAttributes;
    },
  },
};
</script>
