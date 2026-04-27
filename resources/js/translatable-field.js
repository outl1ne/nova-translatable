import FormField from './components/FormField';
import DetailField from './components/DetailField';
import IndexField from './components/IndexField';
import LocaleTabs from './components/LocaleTabs';

Nova.booting(Vue => {
  Vue.component('index-translatable-field', IndexField);
  Vue.component('form-translatable-field', FormField);
  Vue.component('detail-translatable-field', DetailField);
  Vue.component('nova-translatable-locale-tabs', LocaleTabs);
});
