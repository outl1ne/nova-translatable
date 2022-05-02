<template>
  <div v-show="locales.length > 1" class="flex select-none" :class="wrapperClasses" style="margin-bottom: -1rem">
    <div class="ml-auto" :class="listClasses" v-if="displayType != 'none'">
      <a
        v-for="locale in locales"
        :key="locale.key"
        class="ml-3 cursor-pointer font-bold text-80 text-sm"
        :class="{
          'text-primary-500 border-b border-primary-500': locale.key === activeLocale,
          'text-danger border-danger': hasError(locale.key),
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
  props: ['locales', 'activeLocale', 'displayType', 'detail', 'errors', 'errorAttributes', 'localesWithErrors'],
  computed: {
    wrapperClasses() {
      let classes = ['nova-translatable-locale-tabs', 'pt-4'];
      if (!this.detail) classes.push('px-8');
      return classes;
    },

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
  },
};
</script>

<style lang="scss">
.nova-translatable-locale-tabs {
  position: relative;
  z-index: 2;
}
</style>
