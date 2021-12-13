import FormField from './components/locale-select/FormField';
import DetailField from './components/locale-select/DetailField';
import LocaleSelect from './components/locale-select/LocaleSelect';

Nova.booting((Vue, router, store) => {
  Vue.component('form-locale-select-field', FormField);
  Vue.component('detail-locale-select-field', DetailField);
  Vue.component('nova-translatable-locale-select', LocaleSelect);
});
