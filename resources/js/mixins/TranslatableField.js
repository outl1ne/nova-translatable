export default {
  data: () => ({
    value: {},
    activeLocale: void 0,
    originalFieldName: void 0,
    fakeField: void 0,
  }),

  mounted() {
    this.value = this.getInitialValue();
    this.originalFieldName = this.field.name;
    this.activeLocale = this.getActiveLocale();
    this.fakeField = {
      ...this.field,
      value: this.value[this.activeLocale] || '',
      attribute: `${this.field.attribute}.${this.activeLocale}`,
    };

    // Listen to all locale event
    Nova.$on('nova-translatable@setAllLocale', this.setLocale);
  },

  destroyed() {
    Nova.$off('nova-translatable@setAllLocale', this.setLocale);
  },

  computed: {
    locales() {
      return Object.keys(this.field.translatable.locales).map(key => ({
        key,
        name: this.field.translatable.locales[key],
      }));
    },
    fieldValueMustBeAnObject() {
      return ['key-value-field'].includes(this.field.translatable.original_component)
    }
  },

  methods: {
    getInitialValue() {
      const initialValue = {};
      for (const locale of this.locales) {
        initialValue[locale.key] = this.formatValue(this.field.translatable.value[locale.key] || '');
      }
      return initialValue;
    },

    getActiveLocale() {
      let localesFiltered = this.locales.filter(({key}) => key === Nova.config.locale);

      if(localesFiltered.length === 0) {
        localesFiltered = this.locales;
      }

      return localesFiltered[0].key;
    },

    copyValueFromCurrentLocale() {
      if (!this.fakeField.fill) return;

      const formData = new FormData();
      this.fakeField.fill(formData);
      this.value[this.activeLocale] = formData.get(this.fakeField.attribute);
    },

    setLocale(newLocale) {
      // First read and copy the value from current input field
      this.copyValueFromCurrentLocale();

      // Set field value
      this.fakeField.value = this.formatValue(this.value[newLocale] || '');
      this.fakeField.attribute = `${this.field.attribute}.${newLocale}`;

      // Set new activeLocale
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
      let valueFormatted = value || ''

      if(this.fieldValueMustBeAnObject && !_.isObject(valueFormatted)) {
        valueFormatted = JSON.parse(valueFormatted || '{}')
      }

      return valueFormatted
    }
  },
};
