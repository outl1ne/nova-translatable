/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/DetailField.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/DetailField.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mixins_TranslatableField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/TranslatableField */ "./resources/js/mixins/TranslatableField.js");
/* harmony import */ var _LocaleSelect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocaleSelect */ "./resources/js/components/locale-select/LocaleSelect.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LocaleSelect: _LocaleSelect__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  mixins: [_mixins_TranslatableField__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: ['resourceName', 'resourceId', 'resource', 'field']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/FormField.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/FormField.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-nova */ "laravel-nova");
/* harmony import */ var laravel_nova__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(laravel_nova__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_TranslatableField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/TranslatableField */ "./resources/js/mixins/TranslatableField.js");
/* harmony import */ var _LocaleSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocaleSelect */ "./resources/js/components/locale-select/LocaleSelect.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LocaleSelect: _LocaleSelect__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [laravel_nova__WEBPACK_IMPORTED_MODULE_0__.FormField, _mixins_TranslatableField__WEBPACK_IMPORTED_MODULE_1__["default"]],
  props: ['resourceName', 'resourceId', 'resource', 'field'],
  methods: {
    fill: function fill(formData) {
      return;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/LocaleSelect.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/LocaleSelect.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['activeLocale', 'locales', 'displayType', 'detail', 'resourceName', 'resourceId', 'field'],
  computed: {
    localesOptions: function localesOptions() {
      return this.locales.map(function (locale) {
        return {
          label: locale.name,
          value: locale.key
        };
      });
    },
    selectStyles: function selectStyles() {
      var styles = {};
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
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/DetailField.vue?vue&type=template&id=7f2f16e4":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/DetailField.vue?vue&type=template&id=7f2f16e4 ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LocaleSelect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LocaleSelect");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LocaleSelect, {
    detail: true,
    "active-locale": _ctx.activeLocale,
    locales: _ctx.locales,
    "display-type": $props.field.translatable.display_type,
    onLocaleChanged: _ctx.setAllLocale
  }, null, 8
  /* PROPS */
  , ["active-locale", "locales", "display-type", "onLocaleChanged"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/FormField.vue?vue&type=template&id=361b40bb":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/FormField.vue?vue&type=template&id=361b40bb ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_LocaleSelect = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LocaleSelect");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_LocaleSelect, {
    detail: false,
    "active-locale": _ctx.activeLocale,
    locales: _ctx.locales,
    "display-type": $props.field.translatable.display_type,
    onLocaleChanged: _ctx.setAllLocale
  }, null, 8
  /* PROPS */
  , ["active-locale", "locales", "display-type", "onLocaleChanged"]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/LocaleSelect.vue?vue&type=template&id=5e6b59e1":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/LocaleSelect.vue?vue&type=template&id=5e6b59e1 ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_SelectControl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SelectControl");

  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    "class": "locale-select-field w-1/6 z-10",
    style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)($options.selectStyles)
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Select Input Field "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SelectControl, {
    onChange: _cache[0] || (_cache[0] = function (value) {
      return _ctx.$emit('localeChanged', value);
    }),
    selected: $props.activeLocale,
    "class": "w-full form-control form-select",
    options: $options.localesOptions
  }, null, 8
  /* PROPS */
  , ["selected", "options"])], 4
  /* STYLE */
  );
}

/***/ }),

/***/ "./resources/js/mixins/TranslatableField.js":
/*!**************************************************!*\
  !*** ./resources/js/mixins/TranslatableField.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['uniqueId'],
  data: function data() {
    return {
      activeLocale: void 0,
      originalFieldName: void 0,
      fields: this.getInitialFields(),
      isMounted: false
    };
  },
  beforeMount: function beforeMount() {
    this.init();
  },
  mounted: function mounted() {
    this.isMounted = true; // Listen to setAllLocale event

    if (this.uniqueId) Nova.$on(this.getAllLocalesEventName(this.uniqueId), this.setActiveLocale);
    Nova.$on(this.getAllLocalesEventName(), this.setActiveLocale);
  },
  beforeDestroy: function beforeDestroy() {
    if (this.uniqueId) Nova.$off(this.getAllLocalesEventName(this.uniqueId));
    Nova.$off(this.getAllLocalesEventName());
  },
  computed: {
    locales: function locales() {
      var _this = this;

      var localeKeys = Object.keys(this.currentField.translatable.locales);

      if (this.currentField.translatable.prioritize_nova_locale) {
        localeKeys = localeKeys.sort(function (a, b) {
          if (a === Nova.config('locale') && b !== Nova.config('locale')) return -1;
          if (a !== Nova.config('locale') && b === Nova.config('locale')) return 1;
          return 0;
        });
      }

      return localeKeys.map(function (key) {
        return {
          key: key,
          name: _this.currentField.translatable.locales[key]
        };
      });
    },
    fieldValueMustBeAnObject: function fieldValueMustBeAnObject() {
      return ['key-value-field'].includes(this.currentField.translatable.original_component);
    },
    isFlexible: function isFlexible() {
      return this.$parent && this.$parent.field && this.$parent.field.component === 'nova-flexible-content';
    },
    isSimpleRepeatable: function isSimpleRepeatable() {
      return this.$parent && this.$parent.$parent && this.$parent.$parent.field && this.$parent.$parent.field.component === 'simple-repeatable';
    },
    isFile: function isFile() {
      return ['file-field'].includes(this.currentField.translatable.original_component);
    },
    currentField: function currentField() {
      return this.syncedField || this.field;
    }
  },
  methods: {
    init: function init() {
      var _this2 = this;

      this.originalFieldName = this.currentField.name;
      this.activeLocale = this.locales[0].key; // Get starting values

      var initialValues = this.getInitialValues(); // Create fields

      this.locales.forEach(function (locale) {
        return Object.assign(_this2.fields[locale.key], _objectSpread(_objectSpread({}, _this2.currentField), {}, {
          dependsOn: null,
          extraAttributes: _objectSpread({}, _this2.currentField.extraAttributes || {}),
          value: initialValues[locale.key] || '',
          displayedAs: initialValues[locale.key] || '',
          attribute: "".concat(_this2.currentField.attribute, ".").concat(locale.key),
          // Append '.en' to avoid duplicate ID-s in DOM
          validationKey: "".concat(_this2.currentField.attribute, ".").concat(locale.key) // Append locale to validationKey

        }));
      });
    },
    onSyncedField: function onSyncedField() {
      this.init();
    },
    getInitialValues: function getInitialValues() {
      var initialValue = {};

      var _iterator = _createForOfIteratorHelper(this.locales),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var locale = _step.value;
          var localeValue = this.currentField.translatable.value && this.currentField.translatable.value[locale.key] || '';
          initialValue[locale.key] = this.formatValue(localeValue);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return initialValue;
    },
    getInitialFields: function getInitialFields() {
      var field = this.currentField || this.field;
      var locales = Object.keys(field.translatable.locales);
      var fields = {};
      locales.forEach(function (locale) {
        fields[locale] = {
          value: '',
          readonly: '',
          extraAttributes: {},
          attribute: '',
          component: '',
          name: '',
          nullable: '',
          textAlign: ''
        };
      });
      return fields;
    },
    setActiveLocale: function setActiveLocale(newLocale) {
      this.activeLocale = newLocale;
      this.refreshCodeMirror();
    },
    refreshCodeMirror: function refreshCodeMirror() {
      var _this3 = this;

      setTimeout(function () {
        if (!_this3.$refs.main) return;

        var cmList = _this3.$refs.main.querySelectorAll('.CodeMirror');

        if (!cmList.length) return;
        cmList.forEach(function (cm) {
          return cm.CodeMirror.refresh();
        });
      }, 1);
    },
    setAllLocale: function setAllLocale(newLocale) {
      Nova.$emit(this.getAllLocalesEventName(), newLocale);
    },
    formatValue: function formatValue(value) {
      var formattedValue = value || '';

      if (this.fieldValueMustBeAnObject && typeof formattedValue === 'string') {
        try {
          formattedValue = JSON.parse(formattedValue || '{}');
        } catch (e) {
          formattedValue = {};
        }
      }

      return formattedValue;
    },
    getAllLocalesEventName: function getAllLocalesEventName() {
      var uniqueId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
      var id = uniqueId !== null && uniqueId !== void 0 ? uniqueId : void 0;
      return id !== void 0 ? "nova-translatable-".concat(id, "@setAllLocale") : 'nova-translatable@setAllLocale';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/locale-select/DetailField.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/locale-select/DetailField.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailField_vue_vue_type_template_id_7f2f16e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailField.vue?vue&type=template&id=7f2f16e4 */ "./resources/js/components/locale-select/DetailField.vue?vue&type=template&id=7f2f16e4");
/* harmony import */ var _DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailField.vue?vue&type=script&lang=js */ "./resources/js/components/locale-select/DetailField.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_jaapoostinjen_Development_Web_nova_translatable_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_jaapoostinjen_Development_Web_nova_translatable_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_DetailField_vue_vue_type_template_id_7f2f16e4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/locale-select/DetailField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/locale-select/FormField.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/locale-select/FormField.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormField_vue_vue_type_template_id_361b40bb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormField.vue?vue&type=template&id=361b40bb */ "./resources/js/components/locale-select/FormField.vue?vue&type=template&id=361b40bb");
/* harmony import */ var _FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormField.vue?vue&type=script&lang=js */ "./resources/js/components/locale-select/FormField.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_jaapoostinjen_Development_Web_nova_translatable_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_jaapoostinjen_Development_Web_nova_translatable_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_FormField_vue_vue_type_template_id_361b40bb__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/locale-select/FormField.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/locale-select/LocaleSelect.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/locale-select/LocaleSelect.vue ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LocaleSelect_vue_vue_type_template_id_5e6b59e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocaleSelect.vue?vue&type=template&id=5e6b59e1 */ "./resources/js/components/locale-select/LocaleSelect.vue?vue&type=template&id=5e6b59e1");
/* harmony import */ var _LocaleSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocaleSelect.vue?vue&type=script&lang=js */ "./resources/js/components/locale-select/LocaleSelect.vue?vue&type=script&lang=js");
/* harmony import */ var _Users_jaapoostinjen_Development_Web_nova_translatable_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_Users_jaapoostinjen_Development_Web_nova_translatable_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_LocaleSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_LocaleSelect_vue_vue_type_template_id_5e6b59e1__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/locale-select/LocaleSelect.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/locale-select/DetailField.vue?vue&type=script&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/locale-select/DetailField.vue?vue&type=script&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/DetailField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/locale-select/FormField.vue?vue&type=script&lang=js":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/locale-select/FormField.vue?vue&type=script&lang=js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormField.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/FormField.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/locale-select/LocaleSelect.vue?vue&type=script&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/locale-select/LocaleSelect.vue?vue&type=script&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocaleSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocaleSelect_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LocaleSelect.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/LocaleSelect.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/components/locale-select/DetailField.vue?vue&type=template&id=7f2f16e4":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/locale-select/DetailField.vue?vue&type=template&id=7f2f16e4 ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_template_id_7f2f16e4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_DetailField_vue_vue_type_template_id_7f2f16e4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./DetailField.vue?vue&type=template&id=7f2f16e4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/DetailField.vue?vue&type=template&id=7f2f16e4");


/***/ }),

/***/ "./resources/js/components/locale-select/FormField.vue?vue&type=template&id=361b40bb":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/locale-select/FormField.vue?vue&type=template&id=361b40bb ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_template_id_361b40bb__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_FormField_vue_vue_type_template_id_361b40bb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./FormField.vue?vue&type=template&id=361b40bb */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/FormField.vue?vue&type=template&id=361b40bb");


/***/ }),

/***/ "./resources/js/components/locale-select/LocaleSelect.vue?vue&type=template&id=5e6b59e1":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/locale-select/LocaleSelect.vue?vue&type=template&id=5e6b59e1 ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocaleSelect_vue_vue_type_template_id_5e6b59e1__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_LocaleSelect_vue_vue_type_template_id_5e6b59e1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./LocaleSelect.vue?vue&type=template&id=5e6b59e1 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/locale-select/LocaleSelect.vue?vue&type=template&id=5e6b59e1");


/***/ }),

/***/ "laravel-nova":
/*!******************************!*\
  !*** external "LaravelNova" ***!
  \******************************/
/***/ ((module) => {

module.exports = LaravelNova;

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./resources/js/locale-select-field.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_locale_select_FormField__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/locale-select/FormField */ "./resources/js/components/locale-select/FormField.vue");
/* harmony import */ var _components_locale_select_DetailField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/locale-select/DetailField */ "./resources/js/components/locale-select/DetailField.vue");
/* harmony import */ var _components_locale_select_LocaleSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/locale-select/LocaleSelect */ "./resources/js/components/locale-select/LocaleSelect.vue");



Nova.booting(function (Vue, router, store) {
  Vue.component('form-locale-select-field', _components_locale_select_FormField__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Vue.component('detail-locale-select-field', _components_locale_select_DetailField__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Vue.component('nova-translatable-locale-select', _components_locale_select_LocaleSelect__WEBPACK_IMPORTED_MODULE_2__["default"]);
});
})();

/******/ })()
;