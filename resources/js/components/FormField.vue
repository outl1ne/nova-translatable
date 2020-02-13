<template>
  <div class="translatable-field" ref="main">
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
        if (this.isFile) alert('Sorry, nova-translatable File and Image fields inside Flexible currently do not work.');

        const data = {};
        for (const locale of this.locales) {
          const tempFormData = new FormData();
          const field = this.fields[locale.key];
          field.fill(tempFormData);

          const formDataKeys = Array.from(tempFormData.keys());
          data[locale.key] = tempFormData.get(formDataKeys[0]);
        }
        formData.append(this.field.translatable.original_attribute, JSON.stringify(data));
        return;
      }

      for (const locale of this.locales) {
        const ARR_REGEX = () => /\[\d+\]$/g;
        const LOC_LEN = locale.key.length + 1;

        const tempFormData = new FormData();
        const field = this.fields[locale.key];
        field.fill(tempFormData);

        const formDataKeys = Array.from(tempFormData.keys());
        for (const rawKey of formDataKeys) {
          let key = rawKey;
          if (key.slice(-LOC_LEN) === `_${locale.key}`) key = key.slice(0, -LOC_LEN);

          const isArray = !!key.match(ARR_REGEX());
          if (isArray) {
            const result = ARR_REGEX().exec(key);
            key = `${key.slice(0, result.index - LOC_LEN)}${key.slice(result.index)}`;
          }

          if (isArray) {
            const result = ARR_REGEX().exec(key);
            formData.append(
              `${key.slice(0, result.index)}[${locale.key}]${key.slice(result.index)}`,
              tempFormData.get(rawKey)
            );
          } else {
            formData.append(`${key}[${locale.key}]`, tempFormData.get(rawKey));
          }
        }
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
