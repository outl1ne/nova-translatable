<template>
  <div class="translatable-field" ref="main" v-if="fields">
    <locale-tabs
      :locales="locales"
      :active-locale="activeLocale"
      :errors="errors"
      :error-attributes="errorAttributes"
      @tabClick="setActiveLocale"
      @doubleClick="setAllLocale"
    />

    <div v-for="locale in locales" :key="locale.key">
      <component
        v-show="locale.key === activeLocale"
        :is="'form-' + field.translatable.original_component"
        :field="fields[locale.key]"
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
      if (this.isFlexible) {
        const tempFormData = new FormData();
        const data = {};
        for (const locale of this.locales) {
          const field = this.fields[locale.key];
          field.fill(tempFormData);
          data[locale.key] = tempFormData.get(field.attribute);
        }
        formData.append(this.field.translatable.original_attribute, JSON.stringify(data));
        return;
      }

      const tempFormData = new FormData();
      for (const locale of this.locales) {
        const field = this.fields[locale.key];
        field.fill(tempFormData);
        formData.append(`${field.translatable.original_attribute}[${locale.key}]`, tempFormData.get(field.attribute));
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
