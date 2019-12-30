import FormField from './components/FormField';
import DetailField from './components/DetailField';

Nova.booting((Vue, router, store) => {
  Vue.component('form-translatable-field', FormField);
  Vue.component('detail-translatable-field', DetailField);
});
