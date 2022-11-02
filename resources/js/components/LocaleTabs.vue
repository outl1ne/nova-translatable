<template>
  <div
    v-show="locales.length > 1"
    class="nova-translatable-locale-tabs flex select-none"
    :class="{ 'px-8': !this.detail }"
  >
    <div class="ml-auto" :class="listClasses" v-if="displayType != 'none'">
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
      >
        {{ locale.name }}
      </a>
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
  },
};
</script>

<style lang="scss">
.nova-translatable-locale-tabs {
  position: relative;
  z-index: 2;
  padding-top: 0.25rem;

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
