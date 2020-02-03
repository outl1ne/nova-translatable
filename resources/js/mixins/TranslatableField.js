export default {
  data: () => ({
    activeLocale: void 0,
    originalFieldName: void 0,
    fields: void 0,
  }),

  mounted() {
    this.originalFieldName = this.field.name;
    this.activeLocale = this.locales[0].key;

    // Get starting values
    const initialValues = this.getInitialValues();

    // Create fields
    this.fields = {};
    this.locales.forEach(
      locale =>
        (this.fields[locale.key] = {
          ...this.field,
          value: initialValues[locale.key] || '',
          attribute: `${this.field.attribute}.${locale.key}`,
        })
    );

    // Listen to setAllLocale event
    Nova.$on('nova-translatable@setAllLocale', this.setActiveLocale);
  },

  destroyed() {
    Nova.$off('nova-translatable@setAllLocale', this.setActiveLocale);
  },

  computed: {
    locales() {
      return Object.keys(this.field.translatable.locales)
        .sort((a, b) => {
          if (a === Nova.config.locale && b !== Nova.config.locale) return -1;
          if (a !== Nova.config.locale && b === Nova.config.locale) return 1;
          return 0;
        })
        .map(key => ({ key, name: this.field.translatable.locales[key] }));
    },

    fieldValueMustBeAnObject() {
      return ['key-value-field'].includes(this.field.translatable.original_component);
    },

    isFlexible() {
      return this.$parent.field.component === 'nova-flexible-content';
    },
  },

  methods: {
    getInitialValues() {
      const initialValue = {};
      for (const locale of this.locales) {
        initialValue[locale.key] = this.formatValue(this.field.translatable.value[locale.key] || '');
      }
      return initialValue;
    },

    setActiveLocale(newLocale) {
      this.activeLocale = newLocale;
    },

    setAllLocale(newLocale) {
      Nova.$emit('nova-translatable@setAllLocale', newLocale);
    },

    removeBottomBorder() {
      if (!this.$refs.main) return false;
      return this.$refs.main.classList.contains('remove-bottom-border');
    },

    formatValue(value) {
      let formattedValue = value || '';

      if (this.fieldValueMustBeAnObject && !_.isObject(formattedValue)) {
        try {
          formattedValue = JSON.parse(formattedValue || '{}');
        } catch (e) {
          formattedValue = {};
        }
      }

      return formattedValue;
    },
  },
};
