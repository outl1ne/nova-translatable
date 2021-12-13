<template>
  <div class="locale-select-field w-1/6 z-10" :class="selectClasses">
    <!-- Select Input Field -->
    <select-control
      @change="event => $emit('localeChanged', event.target.value)"
      :value="activeLocale"
      class="w-full form-control form-select"
      :options="localesOptions"
    >
    </select-control>
  </div>
</template>

<script>
export default {
  props: ['activeLocale', 'locales', 'displayType', 'detail', 'resourceName', 'resourceId', 'field'],
  computed: {
    localesOptions() {
      return this.locales.map(locale => {
        return {
          label: locale.name,
          value: locale.key,
        };
      });
    },
    selectClasses() {
      const classes = this.detail ? 'px-4' : 'p-4';

      switch (this.displayType) {
        case 'left-static':
          return classes + ' mr-auto ml-left';
        case 'right-static':
          return classes + ' mr-0 ml-auto';
        case 'left-absolute':
          return classes + ' absolute pin-l';
        case 'right-absolute':
        default:
          return classes + ' absolute pin-r';
      }
    },
  },
};
</script>
