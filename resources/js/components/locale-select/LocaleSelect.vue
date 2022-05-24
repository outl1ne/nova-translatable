<template>
  <div class="locale-select-field w-1/6 z-10" :style="selectStyles">
    <!-- Select Input Field -->
    <SelectControl
      @change="value => $emit('localeChanged', value)"
      :selected="activeLocale"
      class="w-full form-control form-select"
      :options="localesOptions"
    >
    </SelectControl>
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
    selectStyles() {
      const styles = {};
      styles.padding = this.detail ? '1rem 0 1rem 0' : '1rem';

      switch (this.displayType) {
        case 'left-static':
          styles.marginRight = 'auto';
          return styles;
        case 'right-static':
          styles.marginRight = '0';
          styles.marginLeft = 'auto';
          return styles;
        case 'left-absolute':
          styles.position = 'absolute';
          styles.left = '0';
          return styles;
        case 'right-absolute':
        default:
          styles.position = 'absolute';
          styles.right = '0';
          return styles;
      }
    },
  },
};
</script>
