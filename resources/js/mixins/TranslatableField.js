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
    this.init();
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
      let localeKeys = Object.keys(this.currentField.translatable.locales);

      if (this.currentField.translatable.prioritize_nova_locale) {
        localeKeys = localeKeys.sort((a, b) => {
          if (a === Nova.config('locale') && b !== Nova.config('locale')) return -1;
          if (a !== Nova.config('locale') && b === Nova.config('locale')) return 1;
          return 0;
        });
      }

      return localeKeys.map(key => ({ key, name: this.currentField.translatable.locales[key] }));
    },

    fieldValueMustBeAnObject() {
      return ['key-value-field'].includes(this.currentField.translatable.original_component);
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
      return ['file-field'].includes(this.currentField.translatable.original_component);
    },

    currentField() {
      return this.syncedField || this.field;
    },
  },

  methods: {
    init() {
      this.originalFieldName = this.currentField.name;
      this.activeLocale = this.locales[0].key;

      // Get starting values
      const initialValues = this.getInitialValues();
      const previewFor = this.getInitialPreviewFor();

      // Create fields
      this.locales.forEach(locale =>
        Object.assign(this.fields[locale.key], {
          ...this.currentField,
          dependsOn: null,
          extraAttributes: { ...(this.currentField.extraAttributes || {}) },
          value: initialValues[locale.key] || '',
          previewFor: previewFor[locale.key] || '',
          displayedAs: initialValues[locale.key] || '',
          attribute: `${this.currentField.attribute}.${locale.key}`, // Append '.en' to avoid duplicate ID-s in DOM
          validationKey: `${this.currentField.validationKey}.${locale.key}`, // Append locale to validationKey
        })
      );
    },

    onSyncedField() {
      this.init();
    },

    getInitialPreviewFor() {
      const initialPreviewFor = {};
      for (const locale of this.locales) {
        const localePreviewFor =
          (this.currentField.translatable.previewFor && this.currentField.translatable.previewFor[locale.key]) || '';
        initialPreviewFor[locale.key] = this.formatValue(localePreviewFor);
      }
      return initialPreviewFor;
    },

    getInitialValues() {
      const initialValue = {};
      for (const locale of this.locales) {
        const localeValue =
          (this.currentField.translatable.value && this.currentField.translatable.value[locale.key]) || '';
        initialValue[locale.key] = this.formatValue(localeValue);
      }
      return initialValue;
    },

    getInitialFields() {
      const field = this.currentField || this.field;
      const locales = Object.keys(field.translatable.locales);
      const fields = {};
      locales.forEach(locale => {
        fields[locale] = {
          value: '',
          previewFor: '',
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

      this.refreshCodeMirror();
    },

    refreshCodeMirror() {
      setTimeout(() => {
        if (!this.$refs.main) return;

        const cmList = this.$refs.main.querySelectorAll('.CodeMirror');
        if (!cmList.length) return;

        cmList.forEach(cm => cm.CodeMirror.refresh());
      }, 1);
    },

    setAllLocale(newLocale) {
      Nova.$emit(this.getAllLocalesEventName(), newLocale);
    },

    formatValue(value) {
      let formattedValue = value || '';

      if (this.fieldValueMustBeAnObject && typeof formattedValue === 'string') {
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
