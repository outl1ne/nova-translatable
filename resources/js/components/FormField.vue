<template>
  <div class="translatable-field">
    <div class="_locale-tabs">
      <a v-for="locale in locales" :key="locale.key" @click="switchToLocale(locale.key)">
        {{ locale.name }}
      </a>
    </div>

    <component
      :is="'form-' + field.translatable.original_component"
      :field="modifiedField"
      :resource-name="resourceName"
      ref="inputField"
    ></component>
  </div>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova';

export default {
  mixins: [HandlesValidationErrors, FormField],
  props: ['field', 'resourceId', 'resourceName'],
  data: () => ({
    value: {},
    activeLocale: void 0,
    originalFieldName: void 0,
  }),
  mounted() {
    this.value = this.getInitialValue();
    this.originalFieldName = this.field.name;
    this.activeLocale = this.locales[0].key;
    this.updateInputValue();
  },
  computed: {
    locales() {
      return Object.keys(this.field.translatable.locales).map(key => ({
        key,
        name: this.field.translatable.locales[key],
      }));
    },
    modifiedField() {
      return {
        ...this.field,
        name: `${this.originalFieldName} (${this.activeLocale})`,
        value: this.value[this.activeLocale],
      };
    },
  },
  methods: {
    setInitialValue() {
      // Do nothing
    },

    getInitialValue() {
      const initialValue = {};
      for (const locale of this.locales) {
        initialValue[locale.key] = this.field.translatable.value[locale.key] || '';
      }
      return initialValue;
    },

    updateInputValue() {
      this.$nextTick(() => this.$refs.inputField.setInitialValue());
    },

    copyValueFromCurrentLocale() {
      const formData = new FormData();
      this.$refs.inputField.fill(formData);
      this.value[this.activeLocale] = formData.get(this.field.attribute);
    },

    switchToLocale(newLocale) {
      // First read and copy the value from current input field
      this.copyValueFromCurrentLocale();

      // Set new activeLocale
      this.activeLocale = newLocale;

      // Update input value
      this.updateInputValue();

      console.info(this.value);
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

<style lang="scss" scoped>
.translatable-field {
  background: red;
}
</style>
