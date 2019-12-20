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

    switchToLocale(newLocale, copyValue = true) {
      // First read and copy the value from current input field
      if (copyValue) this.copyValueFromCurrentLocale();

      // Set field value
      this.fakeField.value = this.value[newLocale];

      // Set new activeLocale
      this.activeLocale = newLocale;
    },
  },
};
