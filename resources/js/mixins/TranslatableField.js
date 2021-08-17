export default {
  props: ['uniqueId'],

  data: function () {
    return {
      activeLocale: void 0,
      originalFieldName: void 0,
      fields: this.getInitialFields(),
      isMounted: false,
    };
  },

  beforeMount() {
    this.originalFieldName = this.field.name;
    this.activeLocale = this.locales[0].key;

    // Get starting values
    const initialValues = this.getInitialValues();

    // Create fields
    this.locales.forEach(locale =>
      _.merge(this.fields[locale.key], {
        ...this.field,
        extraAttributes: { ...(this.field.extraAttributes || {}) },
        value: initialValues[locale.key] || '',
        attribute: `${this.field.attribute}.${locale.key}`, // Append '.en' to avoid duplicate ID-s in DOM
        validationKey: `${this.field.attribute}.${locale.key}`, // Append locale to validationKey
      })
    );
  },

  mounted() {
    this.isMounted = true;

    // Listen to setAllLocale event
    if (this.uniqueId) Nova.$on(this.getAllLocalesEventName(this.uniqueId), this.setActiveLocale);
    Nova.$on(this.getAllLocalesEventName(), this.setActiveLocale);
  },

  beforeDestroy() {
    if (this.uniqueId) Nova.$off(this.getAllLocalesEventName(this.uniqueId));
    Nova.$off(this.getAllLocalesEventName());
  },

  computed: {
    locales() {
      let localeKeys = Object.keys(this.field.translatable.locales);

      if (this.field.translatable.prioritize_nova_locale) {
        localeKeys = localeKeys.sort((a, b) => {
          if (a === Nova.config.locale && b !== Nova.config.locale) return -1;
          if (a !== Nova.config.locale && b === Nova.config.locale) return 1;
          return 0;
        });
      }

      return localeKeys.map(key => ({ key, name: this.field.translatable.locales[key] }));
    },

    fieldValueMustBeAnObject() {
      return ['key-value-field'].includes(this.field.translatable.original_component);
    },

    isFlexible() {
      return this.$parent && this.$parent.field && this.$parent.field.component === 'nova-flexible-content';
    },

    isSimpleRepeatable() {
      return (
        this.$parent &&
        this.$parent.$parent &&
        this.$parent.$parent.field &&
        this.$parent.$parent.field.component === 'simple-repeatable'
      );
    },

    isFile() {
      return ['file-field'].includes(this.field.translatable.original_component);
    },
  },

  methods: {
    getInitialValues() {
      const initialValue = {};
      for (const locale of this.locales) {
        const localeValue = (this.field.translatable.value && this.field.translatable.value[locale.key]) || '';
        initialValue[locale.key] = this.formatValue(localeValue);
      }
      return initialValue;
    },

    getInitialFields() {
      const locales = Object.keys(this.field.translatable.locales);
      const fields = {};
      locales.forEach(locale => {
        fields[locale] = {
          value: '',
          readonly: '',
          extraAttributes: {},
          attribute: '',
          component: '',
          name: '',
          nullable: '',
          textAlign: '',
        };
      });
      return fields;
    },

    setActiveLocale(newLocale) {
      this.activeLocale = newLocale;
    },

    setAllLocale(newLocale) {
      Nova.$emit(this.allLocalesEventName, newLocale);
    },

    removeBottomBorder() {
      if (!this.isMounted || !this.$refs.main) return false;
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

    getAllLocalesEventName(uniqueId = void 0) {
      const id = uniqueId ?? void 0;
      return id !== void 0 ? `nova-translatable-${id}@setAllLocale` : 'nova-translatable@setAllLocale';
    },
  },
};
