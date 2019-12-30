<template>
  <div class="flex select-none" :class="wrapperClasses">
    <a
      v-for="locale in locales"
      :key="locale.key"
      class="mr-4 cursor-pointer font-bold text-80"
      :class="{ 'text-primary': locale.key === activeLocale }"
      @click="() => $emit('tabClick', locale.key)"
      @dblclick="() => $emit('doubleClick', locale.key)"
    >
      {{ locale.name }}
    </a>
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
