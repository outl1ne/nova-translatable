import FormField from './components/FormField';
import DetailField from './components/DetailField';
import IndexField from './components/IndexField';

Nova.booting((Vue, router, store) => {
  Vue.component('index-translatable-field', IndexField);
  Vue.component('form-translatable-field', FormField);
  Vue.component('detail-translatable-field', DetailField);
});
