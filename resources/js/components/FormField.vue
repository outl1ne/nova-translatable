<template>
  <div class="translatable-field">
    <div class="_locale-tabs">
      <a v-for="locale in locales" :key="locale.key" @click="switchToLocale(locale.key)">
        {{ locale.name }}
      </a>
    </div>

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

export default {
  mixins: [HandlesValidationErrors, FormField],
  props: ['field', 'resourceId', 'resourceName'],
  data: () => ({
    value: {},
    activeLocale: void 0,
    originalFieldName: void 0,
    fakeField: void 0,
  }),
  mounted() {
    this.value = this.getInitialValue();
    this.originalFieldName = this.field.name;
    this.activeLocale = this.locales[0].key;
    this.fakeField = { ...this.field };
  },
  computed: {
    locales() {
      return Object.keys(this.field.translatable.locales).map(key => ({
        key,
        name: this.field.translatable.locales[key],
      }));
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

    copyValueFromCurrentLocale() {
      const formData = new FormData();
      this.fakeField.fill(formData);
      this.value[this.activeLocale] = formData.get(this.field.attribute);
    },

    switchToLocale(newLocale) {
      // First read and copy the value from current input field
      this.copyValueFromCurrentLocale();

      // Set field value
      this.fakeField.value = this.value[newLocale];

      // Set new activeLocale
      this.activeLocale = newLocale;
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
