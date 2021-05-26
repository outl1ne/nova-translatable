<template>
  <div v-show="locales.length > 1" class="flex select-none" :class="wrapperClasses">
    <div class="ml-auto" :class="listClasses">
      <a
        v-for="locale in locales"
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
  props: ['locales', 'activeLocale', 'displayType', 'detail', 'errors', 'errorAttributes', 'localesWithErrors'],
  computed: {
    wrapperClasses() {
      if (this.detail) return ['pt-4'];
      return ['pt-4', 'px-8'];
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
