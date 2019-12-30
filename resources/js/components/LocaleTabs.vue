<template>
  <div class="flex select-none" :class="wrapperClasses">
    <div class="ml-auto">
      <a
        v-for="locale in locales"
        :key="locale.key"
        class="ml-3 cursor-pointer font-bold text-80 text-sm"
        :class="{ 'text-primary border-b-2 border-primary': locale.key === activeLocale }"
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
  props: ['locales', 'activeLocale', 'detail'],
  computed: {
    wrapperClasses() {
      if (this.detail) return ['pt-4'];
      return ['pt-4', 'px-8'];
    },
  },
};
</script>
