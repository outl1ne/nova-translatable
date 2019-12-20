Nova.booting((Vue, router, store) => {
  Vue.component('form-translatable-field', require('./components/FormField.vue').default);
  Vue.component('detail-translatable-field', require('./components/DetailField.vue').default);
});
