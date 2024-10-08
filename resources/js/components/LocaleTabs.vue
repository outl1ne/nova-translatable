<template>
  <div
    v-show="locales.length > 1"
    class="nova-translatable-locale-tabs flex select-none md:w-3/4 whitespace-nowrap overflow-x-auto ml-auto"
    :class="{ 'px-8': !this.detail }"
  >
    <div class="ml-auto py-1.5" :class="listClasses" v-if="displayType != 'none'">
      <a
        v-for="locale in locales"
        :key="locale.key"
        :dusk="getDuskKey(locale.key)"
        class="locale-tag ml-3 cursor-pointer font-bold text-80 text-sm"
        :class="{
          '-active': locale.key === activeLocale,
          '-error': hasError(locale.key),
        }"
        @click="() => $emit('tabClick', locale.key)"
        @dblclick="() => $emit('doubleClick', locale.key)"
        v-html="getLocaleDisplay(locale)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'attribute',
    'locales',
    'activeLocale',
    'displayType',
    'detail',
    'errors',
    'errorAttributes',
    'localesWithErrors',
  ],
  computed: {
    listClasses() {
      if (this.displayType === 'column') return ['flex', 'flex-col'];
      return [];
    },
  },

  methods: {
    hasError(locale) {
      if (Array.isArray(this.localesWithErrors) && this.localesWithErrors.includes(locale)) return true;
      if (!this.errors || !this.errorAttributes) return false;

      const errorAttribute = this.errorAttributes[locale];
      return this.errors.has(errorAttribute);
    },

    getDuskKey(locale) {
      if (this.attribute) {
        return `${this.attribute}.${locale}.locale.tab`;
      }

      if (this.errorAttributes && this.errorAttributes[locale]) {
        return `${this.errorAttributes[locale]}.locale.tab`;
      }

      return locale + '.locale.tab';
    },

    getLocaleDisplay(locale) {
      const customDisplay = Nova.config('customLocaleDisplay');

      if (customDisplay && customDisplay[locale.key]) {
        return customDisplay[locale.key];
      }

      return locale.name;
    },
  },
};
</script>

<style lang="scss">
.nova-translatable-locale-tabs {
  position: relative;
  padding-top: 0.25rem;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #C1C1C1;
    border-radius: 5px;
  }

  .locale-tag {
    border-bottom: 2px solid transparent;

    &.-active {
      color: rgba(var(--colors-primary-500));
      border-color: rgba(var(--colors-primary-500));
    }

    &.-error {
      color: rgba(var(--colors-red-500));
      border-color: rgba(var(--colors-red-500));

      &.-active {
        color: rgba(var(--colors-primary-500));
      }
    }
  }
}
</style>
