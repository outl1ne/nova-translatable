(()=>{"use strict";var e={634:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".translatable-field .flex.border-t[data-v-5347f132]{border-style:none!important}",""]);const a=o},659:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".translatable-field:not(:last-child) .field-wrapper[data-v-c8fc54a0]{border-style:solid!important}",""]);const a=o},656:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(645),o=r.n(n)()((function(e){return e[1]}));o.push([e.id,".nova-translatable-locale-tabs{padding-top:.25rem;position:relative;z-index:2}.nova-translatable-locale-tabs .locale-tag{border-bottom:2px solid transparent}.nova-translatable-locale-tabs .locale-tag.-active{border-color:rgba(var(--colors-primary-500));color:rgba(var(--colors-primary-500))}.nova-translatable-locale-tabs .locale-tag.-error{border-color:rgba(var(--colors-red-500));color:rgba(var(--colors-red-500))}.nova-translatable-locale-tabs .locale-tag.-error.-active{color:rgba(var(--colors-primary-500))}",""]);const a=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var i=0;i<e.length;i++){var c=[].concat(e[i]);n&&o[c[0]]||(r&&(c[2]?c[2]="".concat(r," and ").concat(c[2]):c[2]=r),t.push(c))}},t}},379:(e,t,r)=>{var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),l=[];function i(e){for(var t=-1,r=0;r<l.length;r++)if(l[r].identifier===e){t=r;break}return t}function c(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],c=t.base?a[0]+t.base:a[0],s=r[c]||0,u="".concat(c," ").concat(s);r[c]=s+1;var f=i(u),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(l[f].references++,l[f].updater(d)):l.push({identifier:u,updater:y(d,t),references:1}),n.push(u)}return n}function s(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var l=a(e.insert||"head");if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}return t}var u,f=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),l=e.childNodes;l[t]&&e.removeChild(l[t]),l.length?e.insertBefore(a,l[t]):e.appendChild(a)}}function v(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,b=0;function y(e,t){var r,n,o;if(t.singleton){var a=b++;r=p||(p=s(t)),n=d.bind(null,r,a,!1),o=d.bind(null,r,a,!0)}else r=s(t),n=v.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=i(r[n]);l[o].references--}for(var a=c(e,t),s=0;s<r.length;s++){var u=i(r[s]);0===l[u].references&&(l[u].updater(),l.splice(u,1))}r=a}}}},744:(e,t)=>{t.Z=(e,t)=>{const r=e.__vccOpts||e;for(const[e,n]of t)r[e]=n;return r}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nc=void 0,(()=>{const e=Vue;var t={key:0,class:"translatable-field pt-2",ref:"main"};const n=LaravelNova;function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function a(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const u={props:["uniqueId"],data:function(){return{activeLocale:void 0,originalFieldName:void 0,fields:this.getInitialFields(),isMounted:!1}},beforeMount:function(){this.init()},mounted:function(){this.isMounted=!0,this.uniqueId&&Nova.$on(this.getAllLocalesEventName(this.uniqueId),this.setActiveLocale),Nova.$on(this.getAllLocalesEventName(),this.setActiveLocale)},beforeDestroy:function(){this.uniqueId&&Nova.$off(this.getAllLocalesEventName(this.uniqueId)),Nova.$off(this.getAllLocalesEventName())},computed:{locales:function(){var e=this,t=Object.keys(this.currentField.translatable.locales);return this.currentField.translatable.prioritize_nova_locale&&(t=t.sort((function(e,t){return e===Nova.config("locale")&&t!==Nova.config("locale")?-1:e!==Nova.config("locale")&&t===Nova.config("locale")?1:0}))),t.map((function(t){return{key:t,name:e.currentField.translatable.locales[t]}}))},fieldValueMustBeAnObject:function(){return["key-value-field"].includes(this.currentField.translatable.original_component)},isFlexible:function(){return this.$parent&&this.$parent.field&&"nova-flexible-content"===this.$parent.field.component},isSimpleRepeatable:function(){return this.$parent&&this.$parent.$parent&&this.$parent.$parent.field&&"simple-repeatable"===this.$parent.$parent.field.component},isFile:function(){return["file-field"].includes(this.currentField.translatable.original_component)},currentField:function(){return this.syncedField||this.field}},methods:{init:function(){var e=this;this.originalFieldName=this.currentField.name,this.activeLocale=this.locales[0].key;var t=this.getInitialValues(),r=this.getInitialPreviewFor();this.locales.forEach((function(n){return Object.assign(e.fields[n.key],c(c({},e.currentField),{},{dependsOn:null,extraAttributes:c({},e.currentField.extraAttributes||{}),value:t[n.key]||"",previewFor:r[n.key]||"",displayedAs:t[n.key]||"",attribute:"".concat(e.currentField.attribute,".").concat(n.key),validationKey:"".concat(e.currentField.validationKey,".").concat(n.key)}))}))},onSyncedField:function(){this.init()},getInitialPreviewFor:function(){var e,t={},r=a(this.locales);try{for(r.s();!(e=r.n()).done;){var n=e.value,o=this.currentField.translatable.previewFor&&this.currentField.translatable.previewFor[n.key]||"";t[n.key]=this.formatValue(o)}}catch(e){r.e(e)}finally{r.f()}return t},getInitialValues:function(){var e,t={},r=a(this.locales);try{for(r.s();!(e=r.n()).done;){var n=e.value,o=this.currentField.translatable.value&&this.currentField.translatable.value[n.key]||"";t[n.key]=this.formatValue(o)}}catch(e){r.e(e)}finally{r.f()}return t},getInitialFields:function(){var e=this.currentField||this.field,t=Object.keys(e.translatable.locales),r={};return t.forEach((function(e){r[e]={value:"",previewFor:"",readonly:"",extraAttributes:{},attribute:"",component:"",name:"",nullable:"",textAlign:""}})),r},setActiveLocale:function(e){this.activeLocale=e,this.refreshCodeMirror()},refreshCodeMirror:function(){var e=this;setTimeout((function(){if(e.$refs.main){var t=e.$refs.main.querySelectorAll(".CodeMirror");t.length&&t.forEach((function(e){return e.CodeMirror.refresh()}))}}),1)},setAllLocale:function(e){Nova.$emit(this.getAllLocalesEventName(),e)},formatValue:function(e){var t=e||"";if(this.fieldValueMustBeAnObject&&"string"==typeof t)try{t=JSON.parse(t||"{}")}catch(e){t={}}return t},getAllLocalesEventName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=null!=e?e:void 0;return void 0!==t?"nova-translatable-".concat(t,"@setAllLocale"):"nova-translatable@setAllLocale"}}};var f=["dusk","onClick","onDblclick"];const d={props:["attribute","locales","activeLocale","displayType","detail","errors","errorAttributes","localesWithErrors"],computed:{listClasses:function(){return"column"===this.displayType?["flex","flex-col"]:[]}},methods:{hasError:function(e){if(Array.isArray(this.localesWithErrors)&&this.localesWithErrors.includes(e))return!0;if(!this.errors||!this.errorAttributes)return!1;var t=this.errorAttributes[e];return this.errors.has(t)},getDuskKey:function(e){return this.attribute?"".concat(this.attribute,".").concat(e,".locale.tab"):this.errorAttributes&&this.errorAttributes[e]?"".concat(this.errorAttributes[e],".locale.tab"):e+".locale.tab"}}};var v=r(379),p=r.n(v),b=r(656),y={insert:"head",singleton:!1};p()(b.Z,y);b.Z.locals;var h=r(744);const m=(0,h.Z)(d,[["render",function(t,r,n,o,a,l){return(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createElementBlock)("div",{class:(0,e.normalizeClass)(["nova-translatable-locale-tabs flex select-none",{"px-8":!this.detail}])},["none"!=n.displayType?((0,e.openBlock)(),(0,e.createElementBlock)("div",{key:0,class:(0,e.normalizeClass)(["ml-auto",l.listClasses])},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(n.locales,(function(r){return(0,e.openBlock)(),(0,e.createElementBlock)("a",{key:r.key,dusk:l.getDuskKey(r.key),class:(0,e.normalizeClass)(["locale-tag ml-3 cursor-pointer font-bold text-80 text-sm",{"-active":r.key===n.activeLocale,"-error":l.hasError(r.key)}]),onClick:function(){return t.$emit("tabClick",r.key)},onDblclick:function(){return t.$emit("doubleClick",r.key)}},(0,e.toDisplayString)(r.name),43,f)})),128))],2)):(0,e.createCommentVNode)("",!0)],2)),[[e.vShow,n.locales.length>1]])}]]);function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,l,i=[],c=!0,s=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw o}}return i}}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=A(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,a=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw a}}}}function A(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const F={components:{LocaleTabs:m},mixins:[n.HandlesValidationErrors,n.DependentFormField,u],props:["field","resourceId","resourceName"],methods:{setInitialValue:function(){},isKeyAnArray:function(e){return!!e.match(/\[\d+\]$/g)},getKeyAndValue:function(e,t,r){var n=t.key.length+1,o=e;o.slice(-n)===".".concat(t.key)&&(o=o.slice(0,-n));var a=!!o.match(/\[\d+\]$/g);if(a){var l=/\[\d+\]$/g.exec(o);o="".concat(o.slice(0,l.index-n)).concat(o.slice(l.index))}if(a){var i=/\[\d+\]$/g.exec(o);return["".concat(o.slice(0,i.index),"[").concat(t.key,"]").concat(o.slice(i.index)),r.get(e)]}return["".concat(o,"[").concat(t.key,"]"),r.get(e)]},fill:function(e){try{if(this.isFlexible&&this.isFile)return alert("Sorry, nova-translatable File and Image fields inside Flexible currently do not work.");var t,r={},n=this.currentField.translatable.original_attribute,o=k(this.locales);try{for(o.s();!(t=o.n()).done;){var a=t.value,l=new FormData,i=this.fields[a.key];i.fill&&i.fill(l);for(var c=Array.from(l.keys()),s=0,u=c;s<u.length;s++){var f=u[s],d=g(this.getKeyAndValue(f,a,l),2),v=d[0],p=d[1];if(this.isFlexible&&v.endsWith(n+"[".concat(a.key,"]"))||this.isSimpleRepeatable)this.isKeyAnArray(f)?(r[a.key]||(r[a.key]=[]),r[a.key].push(p)):r[a.key]=p;else(e.formData||e).append(v,p)}}}catch(e){o.e(e)}finally{o.f()}return void((this.isFlexible||this.isSimpleRepeatable)&&e.append(n,JSON.stringify(r)))}catch(e){console.error(e)}}},computed:{errorAttributes:function(){var e,t={},r=k(this.locales);try{for(r.s();!(e=r.n()).done;){var n=e.value;t[n.key]="".concat(this.currentField.validationKey,".").concat(n.key)}}catch(e){r.e(e)}finally{r.f()}return t}}};var x=r(659),S={insert:"head",singleton:!1};p()(x.Z,S);x.Z.locals;const C=(0,h.Z)(F,[["render",function(r,n,o,a,l,i){var c=(0,e.resolveComponent)("LocaleTabs");return r.currentField.visible?((0,e.openBlock)(),(0,e.createElementBlock)("div",t,[(0,e.createVNode)(c,{locales:r.locales,attribute:o.field.attribute,"active-locale":r.activeLocale,"display-type":r.currentField.translatable.display_type,errors:r.errors,"error-attributes":i.errorAttributes,onTabClick:r.setActiveLocale,onDoubleClick:r.setAllLocale},null,8,["locales","attribute","active-locale","display-type","errors","error-attributes","onTabClick","onDoubleClick"]),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.locales,(function(t){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{key:t.key},[(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)("form-"+r.currentField.translatable.original_component),{field:r.fields[t.key],"resource-name":o.resourceName,errors:r.errors,"translatable-locale":t.key,"show-help-text":r.showHelpText},null,8,["field","resource-name","errors","translatable-locale","show-help-text"])),[[e.vShow,t.key===r.activeLocale]])])})),128))],512)):(0,e.createCommentVNode)("",!0)}],["__scopeId","data-v-c8fc54a0"]]);var O={class:"translatable-field pt-2 dark:border-gray-700 -mx-6 px-6",ref:"main"};const L={components:{LocaleTabs:m},mixins:[u],props:["resourceName","resourceId","resource","field"]};var N=r(634),j={insert:"head",singleton:!1};p()(N.Z,j);N.Z.locals;const E=(0,h.Z)(L,[["render",function(t,r,n,o,a,l){var i=(0,e.resolveComponent)("LocaleTabs");return(0,e.openBlock)(),(0,e.createElementBlock)("div",O,[(0,e.createVNode)(i,{detail:!0,attribute:n.field.attribute,locales:t.locales,"active-locale":t.activeLocale,"display-type":n.field.translatable.display_type,onTabClick:r[0]||(r[0]=function(e){return t.activeLocale=e}),onDoubleClick:t.setAllLocale},null,8,["attribute","locales","active-locale","display-type","onDoubleClick"]),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(t.locales,(function(r){return(0,e.openBlock)(),(0,e.createElementBlock)("div",{key:r.key},[(0,e.withDirectives)(((0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)("detail-"+n.field.translatable.original_component),{field:t.fields[r.key],"translatable-locale":r.key,"resource-name":n.resourceName},null,8,["field","translatable-locale","resource-name"])),[[e.vShow,r.key===t.activeLocale]])])})),128))],512)}],["__scopeId","data-v-5347f132"]]);const B={mixins:[u],props:["resourceName","resourceId","resource","field"]},I=(0,h.Z)(B,[["render",function(t,r,n,o,a,l){return(0,e.openBlock)(),(0,e.createBlock)((0,e.resolveDynamicComponent)("index-"+n.field.translatable.original_component),{field:t.fields[t.activeLocale],"translatable-locale":t.activeLocale,"resource-name":n.resourceName},null,8,["field","translatable-locale","resource-name"])}]]);Nova.booting((function(e){e.component("index-translatable-field",I),e.component("form-translatable-field",C),e.component("detail-translatable-field",E),e.component("nova-translatable-locale-tabs",m)}))})()})();