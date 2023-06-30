<template>
  <div class="translatable-field pt-2" ref="main" v-if="currentField.visible">
    <LocaleTabs
      :locales="locales"
      :attribute="field.attribute"
      :active-locale="activeLocale"
      :display-type="currentField.translatable.display_type"
      :errors="errors"
      :error-attributes="errorAttributes"
      @tabClick="setActiveLocale"
      @doubleClick="setAllLocale"
    />

    <div v-for="locale in locales" :key="locale.key">
      <component
        v-show="locale.key === activeLocale"
        :is="'form-' + currentField.translatable.original_component"
        :field="fields[locale.key]"
        :resource-name="resourceName"
        :errors="errors"
        :translatable-locale="locale.key"
        :show-help-text="showHelpText"
      />
    </div>
  </div>
</template>

<script>
import { DependentFormField, HandlesValidationErrors } from 'laravel-nova';
import TranslatableField from '../mixins/TranslatableField';
import LocaleTabs from './LocaleTabs';

export default {
  components: { LocaleTabs },
  mixins: [HandlesValidationErrors, DependentFormField, TranslatableField],
  props: ['field', 'resourceId', 'resourceName'],
  methods: {
    setInitialValue() {
      // Do nothing
    },

    isKeyAnArray(key) {
      const ARR_REGEX = () => /\[\d+\]$/g;
      return !!key.match(ARR_REGEX());
    },

    getKeyAndValue(rawKey, locale, formData) {
      const ARR_REGEX = () => /\[\d+\]$/g;
      const LOC_LEN = locale.key.length + 1;

      let key = rawKey;

      // Remove '.en' ending from key
      if (key.slice(-LOC_LEN) === `.${locale.key}`) key = key.slice(0, -LOC_LEN);

      // Is key is an array, we need to remove the '.en' part from '.en[0]'
      const isArray = !!key.match(ARR_REGEX());
      if (isArray) {
        const result = ARR_REGEX().exec(key);
        key = `${key.slice(0, result.index - LOC_LEN)}${key.slice(result.index)}`;
      }

      if (isArray) {
        const result = ARR_REGEX().exec(key);
        return [`${key.slice(0, result.index)}[${locale.key}]${key.slice(result.index)}`, formData.get(rawKey)];
      } else {
        return [`${key}[${locale.key}]`, formData.get(rawKey)];
      }
    },

    fill(formData) {
      try {
        if (this.isFlexible && this.isFile)
          return alert('Sorry, nova-translatable File and Image fields inside Flexible currently do not work.');

        const data = {};
        const originalAttribute = this.currentField.translatable.original_attribute;

        for (const locale of this.locales) {
          const tempFormData = new FormData();
          const field = this.fields[locale.key];
          if (field.fill) field.fill(tempFormData);

          const formDataKeys = Array.from(tempFormData.keys());
          for (const rawKey of formDataKeys) {
            const [key, value] = this.getKeyAndValue(rawKey, locale, tempFormData);

            if ((this.isFlexible && key.endsWith(originalAttribute + `[${locale.key}]`)) || this.isSimpleRepeatable) {
              if (this.isKeyAnArray(rawKey)) {
                if (!data[locale.key]) data[locale.key] = [];
                data[locale.key].push(value);
              } else {
                data[locale.key] = value;
              }
            } else {
              // Fix for when the field is coming from a relationship
              let realFormData = formData.formData || formData;
              realFormData.append(key, value);
            }
          }
        }

        if (this.isFlexible || this.isSimpleRepeatable) formData.append(originalAttribute, JSON.stringify(data));
        return;
      } catch (e) {
        console.error(e);
      }
    },
  },
  computed: {
    errorAttributes() {
      const locales = this.locales;
      const errorAttributes = {};
      for (const locale of locales) {
        errorAttributes[locale.key] = `${this.currentField.validationKey}.${locale.key}`;
      }
      return errorAttributes;
    },
  },
};
</script>

<style lang="scss" scoped>
.translatable-field:not(:last-child) {
  .field-wrapper {
    border-style: solid !important;
  }
}
</style>
