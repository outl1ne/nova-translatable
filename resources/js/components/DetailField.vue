<template>
  <div class="translatable-field">
    <div class="_locale-tabs">
      <a v-for="locale in locales" :key="locale.key" @click="activeLocale = locale.key">
        {{ locale.name }}
      </a>
    </div>

    <component
      :is="'detail-' + field.translatable.original_component"
      :field="modifiedField"
      :resource-name="resourceName"
    ></component>
  </div>
</template>

<script>
export default {
  props: ['resourceName', 'field'],
  data: () => ({
    value: {},
    activeLocale: void 0,
    originalFieldName: void 0,
  }),
  mounted() {
    this.value = this.getInitialValue();
    this.originalFieldName = this.field.name;
    this.activeLocale = this.locales[0].key;
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
    getInitialValue() {
      const initialValue = {};
      for (const locale of this.locales) {
        initialValue[locale.key] = this.field.translatable.value[locale.key] || '';
      }
      return initialValue;
    },
  },
};
</script>
