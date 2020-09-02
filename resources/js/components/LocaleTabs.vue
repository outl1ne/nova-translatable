<template>
  <div v-show="sortedLocales.length > 1" class="flex select-none" :class="wrapperClasses">
    <div class="ml-auto">
      <a
        v-for="locale in sortedLocales"
        :key="locale.key"
        class="ml-3 cursor-pointer font-bold text-80 text-sm"
        :class="{
          'text-primary border-b-2 border-primary': locale.key === activeLocale,
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
  props: ['locales', 'activeLocale', 'detail', 'errors', 'errorAttributes'],
  computed: {
    wrapperClasses() {
      if (this.detail) return ['pt-4'];
      return ['pt-4', 'px-8'];
    },

    sortedLocales() {
      const novaLocale = _.find(this.locales, ['key', Nova.config.locale]);
      if (!novaLocale) return this.locales;
      return [novaLocale, ...this.locales.filter(({ key }) => key !== Nova.config.locale)];
    },
  },
  methods: {
    hasError(locale) {
      if (!this.errors || !this.errorAttributes) return false;
      const errorAttribute = this.errorAttributes[locale];
      return this.errors.has(errorAttribute);
    },
  },
};
</script>
