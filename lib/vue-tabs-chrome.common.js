module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _assertThisInitialized; });\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _classCallCheck; });\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createSuper.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _createSuper; });\n/* harmony import */ var _getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isNativeReflectConstruct.js */ \"./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js\");\n/* harmony import */ var _possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./possibleConstructorReturn.js */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n\n\n\nfunction _createSuper(Derived) {\n  var hasNativeReflectConstruct = Object(_isNativeReflectConstruct_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  return function _createSuperInternal() {\n    var Super = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Derived),\n        result;\n\n    if (hasNativeReflectConstruct) {\n      var NewTarget = Object(_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this).constructor;\n      result = Reflect.construct(Super, arguments, NewTarget);\n    } else {\n      result = Super.apply(this, arguments);\n    }\n\n    return Object(_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(this, result);\n  };\n}\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@babel/runtime/helpers/esm/createSuper.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _getPrototypeOf; });\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _inherits; });\n/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ \"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(subClass, superClass);\n}\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@babel/runtime/helpers/esm/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _isNativeReflectConstruct; });\nfunction _isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _possibleConstructorReturn; });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized.js */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return Object(_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(self);\n}\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _setPrototypeOf; });\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n\n    module.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n\n    module.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\nmodule.exports[\"default\"] = module.exports, module.exports.__esModule = true;\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@soda/get-current-script/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@soda/get-current-script/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller\n// MIT license\n// source: https://github.com/amiller-gh/currentScript-polyfill\n\n// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505\n\n(function (root, factory) {\n  if (true) {\n    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else {}\n}(typeof self !== 'undefined' ? self : this, function () {\n  function getCurrentScript () {\n    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')\n    // for chrome\n    if (!descriptor && 'currentScript' in document && document.currentScript) {\n      return document.currentScript\n    }\n\n    // for other browsers with native support for currentScript\n    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {\n      return document.currentScript\n    }\n  \n    // IE 8-10 support script readyState\n    // IE 11+ & Firefox support stack trace\n    try {\n      throw new Error();\n    }\n    catch (err) {\n      // Find the second match for the \"at\" string to get file src url from stack.\n      var ieStackRegExp = /.*at [^(]*\\((.*):(.+):(.+)\\)$/ig,\n        ffStackRegExp = /@([^@]*):(\\d+):(\\d+)\\s*$/ig,\n        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),\n        scriptLocation = (stackDetails && stackDetails[1]) || false,\n        line = (stackDetails && stackDetails[2]) || false,\n        currentLocation = document.location.href.replace(document.location.hash, ''),\n        pageSource,\n        inlineScriptSourceRegExp,\n        inlineScriptSource,\n        scripts = document.getElementsByTagName('script'); // Live NodeList collection\n  \n      if (scriptLocation === currentLocation) {\n        pageSource = document.documentElement.outerHTML;\n        inlineScriptSourceRegExp = new RegExp('(?:[^\\\\n]+?\\\\n){0,' + (line - 2) + '}[^<]*<script>([\\\\d\\\\D]*?)<\\\\/script>[\\\\d\\\\D]*', 'i');\n        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();\n      }\n  \n      for (var i = 0; i < scripts.length; i++) {\n        // If ready state is interactive, return the script tag\n        if (scripts[i].readyState === 'interactive') {\n          return scripts[i];\n        }\n  \n        // If src matches, return the script tag\n        if (scripts[i].src === scriptLocation) {\n          return scripts[i];\n        }\n  \n        // If inline source matches, return the script tag\n        if (\n          scriptLocation === currentLocation &&\n          scripts[i].innerHTML &&\n          scripts[i].innerHTML.trim() === inlineScriptSource\n        ) {\n          return scripts[i];\n        }\n      }\n  \n      // If no match, return null\n      return null;\n    }\n  };\n\n  return getCurrentScript\n}));\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@soda/get-current-script/index.js?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _setPublicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPublicPath */ \"./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js\");\n/* harmony import */ var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ~entry */ \"./src/index.ts\");\n/* empty/unused harmony star reexport */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_entry__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js?");

/***/ }),

/***/ "./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// This file is imported into lib/wc client bundles.\n\nif (typeof window !== 'undefined') {\n  var currentScript = window.document.currentScript\n  if (true) {\n    var getCurrentScript = __webpack_require__(/*! @soda/get-current-script */ \"./node_modules/@soda/get-current-script/index.js\")\n    currentScript = getCurrentScript()\n\n    // for backward compatibility, because previously we directly included the polyfill\n    if (!('currentScript' in document)) {\n      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })\n    }\n  }\n\n  var src = currentScript && currentScript.src.match(/(.+\\/)[^/]+\\.js(\\?.*)?$/)\n  if (src) {\n    __webpack_require__.p = src[1] // eslint-disable-line\n  }\n}\n\n// Indicate to webpack that this file can be concatenated\n/* harmony default export */ __webpack_exports__[\"default\"] = (null);\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js?");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/my-button/src/MyButton.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/my-button/src/MyButton.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jinhuihou_Desktop_npm_vue_tabs_chrome_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_jinhuihou_Desktop_npm_vue_tabs_chrome_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_jinhuihou_Desktop_npm_vue_tabs_chrome_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ \"./node_modules/@babel/runtime/helpers/esm/createSuper.js\");\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var vue_property_decorator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-property-decorator */ \"./node_modules/vue-property-decorator/lib/index.js\");\n\n\n\n\n\n\nvar MyButton = /*#__PURE__*/function (_Vue) {\n  Object(_Users_jinhuihou_Desktop_npm_vue_tabs_chrome_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(MyButton, _Vue);\n\n  var _super = Object(_Users_jinhuihou_Desktop_npm_vue_tabs_chrome_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(MyButton);\n\n  function MyButton() {\n    Object(_Users_jinhuihou_Desktop_npm_vue_tabs_chrome_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, MyButton);\n\n    return _super.apply(this, arguments);\n  }\n\n  return MyButton;\n}(vue_property_decorator__WEBPACK_IMPORTED_MODULE_4__[\"Vue\"]);\n\nObject(tslib__WEBPACK_IMPORTED_MODULE_3__[\"__decorate\"])([Object(vue_property_decorator__WEBPACK_IMPORTED_MODULE_4__[\"Prop\"])()], MyButton.prototype, \"msg\", void 0);\n\nMyButton = Object(tslib__WEBPACK_IMPORTED_MODULE_3__[\"__decorate\"])([vue_property_decorator__WEBPACK_IMPORTED_MODULE_4__[\"Component\"]], MyButton);\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyButton);\n\n//# sourceURL=webpack://vue-tabs-chrome/./packages/my-button/src/MyButton.vue?./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--13-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2b3ed7de-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/my-button/src/MyButton.vue?vue&type=template&id=333d8cc9&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2b3ed7de-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/my-button/src/MyButton.vue?vue&type=template&id=333d8cc9&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"button\" }, [_vm._v(\" 按钮 \")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./packages/my-button/src/MyButton.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%222b3ed7de-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\nmodule.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n// eslint-disable-next-line es/no-array-prototype-foreach -- safe\n} : [].forEach;\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_OUT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else switch (TYPE) {\n          case 4: return false;             // every\n          case 7: push.call(target, value); // filterOut\n        }\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterOut` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterOut: createMethod(7)\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] < 4 ? 1 : match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof global == 'object' && global) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\n\nvar hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = Object.hasOwn || function hasOwn(it, key) {\n  return hasOwnProperty.call(toObject(it), key);\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins -- safe\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\n// eslint-disable-next-line es/no-array-isarray -- safe\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  var symbol = Symbol();\n  // Chrome 38 Symbol has incorrect toString conversion\n  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances\n  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||\n    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances\n    !Symbol.sham && V8_VERSION && V8_VERSION < 41;\n});\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.14.0',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.es/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable es/no-symbol -- required for testing */\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  && !Symbol.sham\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) {\n      WellKnownSymbolsStore[name] = Symbol[name];\n    } else {\n      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n    }\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar FunctionPrototype = Function.prototype;\nvar FunctionPrototypeToString = FunctionPrototype.toString;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// Function instances `.name` property\n// https://tc39.es/ecma262/#sec-function-instances-name\nif (DESCRIPTORS && !(NAME in FunctionPrototype)) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return FunctionPrototypeToString.call(this).match(nameRE)[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/modules/es.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/my-button/src/MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/my-button/src/MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".button[data-v-333d8cc9] {\\n  width: 64px;\\n  height: 24px;\\n  border-radius: 4px;\\n  border: 1px solid #2c3e50;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./packages/my-button/src/MyButton.vue?./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__extends\", function() { return __extends; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__assign\", function() { return __assign; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__rest\", function() { return __rest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__decorate\", function() { return __decorate; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__param\", function() { return __param; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__metadata\", function() { return __metadata; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__awaiter\", function() { return __awaiter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__generator\", function() { return __generator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__createBinding\", function() { return __createBinding; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__exportStar\", function() { return __exportStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__values\", function() { return __values; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__read\", function() { return __read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__spread\", function() { return __spread; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__spreadArrays\", function() { return __spreadArrays; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__await\", function() { return __await; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncGenerator\", function() { return __asyncGenerator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncDelegator\", function() { return __asyncDelegator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__asyncValues\", function() { return __asyncValues; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__makeTemplateObject\", function() { return __makeTemplateObject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importStar\", function() { return __importStar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__importDefault\", function() { return __importDefault; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__classPrivateFieldGet\", function() { return __classPrivateFieldGet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__classPrivateFieldSet\", function() { return __classPrivateFieldSet; });\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation.\r\n\r\nPermission to use, copy, modify, and/or distribute this software for any\r\npurpose with or without fee is hereby granted.\r\n\r\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\r\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\r\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\r\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\r\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\r\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\r\nPERFORMANCE OF THIS SOFTWARE.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = function(d, b) {\r\n    extendStatics = Object.setPrototypeOf ||\r\n        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n    return extendStatics(d, b);\r\n};\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = function() {\r\n    __assign = Object.assign || function __assign(t) {\r\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n            s = arguments[i];\r\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n        }\r\n        return t;\r\n    }\r\n    return __assign.apply(this, arguments);\r\n}\r\n\r\nfunction __rest(s, e) {\r\n    var t = {};\r\n    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)\r\n        t[p] = s[p];\r\n    if (s != null && typeof Object.getOwnPropertySymbols === \"function\")\r\n        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {\r\n            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))\r\n                t[p[i]] = s[p[i]];\r\n        }\r\n    return t;\r\n}\r\n\r\nfunction __decorate(decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n}\r\n\r\nfunction __param(paramIndex, decorator) {\r\n    return function (target, key) { decorator(target, key, paramIndex); }\r\n}\r\n\r\nfunction __metadata(metadataKey, metadataValue) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(metadataKey, metadataValue);\r\n}\r\n\r\nfunction __awaiter(thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n}\r\n\r\nfunction __generator(thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n}\r\n\r\nfunction __createBinding(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}\r\n\r\nfunction __exportStar(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !exports.hasOwnProperty(p)) exports[p] = m[p];\r\n}\r\n\r\nfunction __values(o) {\r\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\r\n    if (m) return m.call(o);\r\n    if (o && typeof o.length === \"number\") return {\r\n        next: function () {\r\n            if (o && i >= o.length) o = void 0;\r\n            return { value: o && o[i++], done: !o };\r\n        }\r\n    };\r\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\r\n}\r\n\r\nfunction __read(o, n) {\r\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\r\n    if (!m) return o;\r\n    var i = m.call(o), r, ar = [], e;\r\n    try {\r\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\r\n    }\r\n    catch (error) { e = { error: error }; }\r\n    finally {\r\n        try {\r\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\r\n        }\r\n        finally { if (e) throw e.error; }\r\n    }\r\n    return ar;\r\n}\r\n\r\nfunction __spread() {\r\n    for (var ar = [], i = 0; i < arguments.length; i++)\r\n        ar = ar.concat(__read(arguments[i]));\r\n    return ar;\r\n}\r\n\r\nfunction __spreadArrays() {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\n\r\nfunction __await(v) {\r\n    return this instanceof __await ? (this.v = v, this) : new __await(v);\r\n}\r\n\r\nfunction __asyncGenerator(thisArg, _arguments, generator) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var g = generator.apply(thisArg, _arguments || []), i, q = [];\r\n    return i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i;\r\n    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }\r\n    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }\r\n    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }\r\n    function fulfill(value) { resume(\"next\", value); }\r\n    function reject(value) { resume(\"throw\", value); }\r\n    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }\r\n}\r\n\r\nfunction __asyncDelegator(o) {\r\n    var i, p;\r\n    return i = {}, verb(\"next\"), verb(\"throw\", function (e) { throw e; }), verb(\"return\"), i[Symbol.iterator] = function () { return this; }, i;\r\n    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === \"return\" } : f ? f(v) : v; } : f; }\r\n}\r\n\r\nfunction __asyncValues(o) {\r\n    if (!Symbol.asyncIterator) throw new TypeError(\"Symbol.asyncIterator is not defined.\");\r\n    var m = o[Symbol.asyncIterator], i;\r\n    return m ? m.call(o) : (o = typeof __values === \"function\" ? __values(o) : o[Symbol.iterator](), i = {}, verb(\"next\"), verb(\"throw\"), verb(\"return\"), i[Symbol.asyncIterator] = function () { return this; }, i);\r\n    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }\r\n    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }\r\n}\r\n\r\nfunction __makeTemplateObject(cooked, raw) {\r\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\r\n    return cooked;\r\n};\r\n\r\nfunction __importStar(mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\r\n    result.default = mod;\r\n    return result;\r\n}\r\n\r\nfunction __importDefault(mod) {\r\n    return (mod && mod.__esModule) ? mod : { default: mod };\r\n}\r\n\r\nfunction __classPrivateFieldGet(receiver, privateMap) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to get private field on non-instance\");\r\n    }\r\n    return privateMap.get(receiver);\r\n}\r\n\r\nfunction __classPrivateFieldSet(receiver, privateMap, value) {\r\n    if (!privateMap.has(receiver)) {\r\n        throw new TypeError(\"attempted to set private field on non-instance\");\r\n    }\r\n    privateMap.set(receiver, value);\r\n    return value;\r\n}\r\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/tslib/tslib.es6.js?");

/***/ }),

/***/ "./node_modules/vue-class-component/dist/vue-class-component.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-class-component/dist/vue-class-component.esm.js ***!
  \**************************************************************************/
/*! exports provided: default, createDecorator, mixins */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDecorator\", function() { return createDecorator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mixins\", function() { return mixins; });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/**\n  * vue-class-component v7.2.6\n  * (c) 2015-present Evan You\n  * @license MIT\n  */\n\n\nfunction _typeof(obj) {\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) {\n    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];\n\n    return arr2;\n  }\n}\n\nfunction _iterableToArray(iter) {\n  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\n\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\n\n// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills\n// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.\n// Without this check consumers will encounter hard to track down runtime errors.\nfunction reflectionIsSupported() {\n  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;\n}\nfunction copyReflectionMetadata(to, from) {\n  forwardMetadata(to, from);\n  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {\n    forwardMetadata(to.prototype, from.prototype, key);\n  });\n  Object.getOwnPropertyNames(from).forEach(function (key) {\n    forwardMetadata(to, from, key);\n  });\n}\n\nfunction forwardMetadata(to, from, propertyKey) {\n  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);\n  metaKeys.forEach(function (metaKey) {\n    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);\n\n    if (propertyKey) {\n      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);\n    } else {\n      Reflect.defineMetadata(metaKey, metadata, to);\n    }\n  });\n}\n\nvar fakeArray = {\n  __proto__: []\n};\nvar hasProto = fakeArray instanceof Array;\nfunction createDecorator(factory) {\n  return function (target, key, index) {\n    var Ctor = typeof target === 'function' ? target : target.constructor;\n\n    if (!Ctor.__decorators__) {\n      Ctor.__decorators__ = [];\n    }\n\n    if (typeof index !== 'number') {\n      index = undefined;\n    }\n\n    Ctor.__decorators__.push(function (options) {\n      return factory(options, key, index);\n    });\n  };\n}\nfunction mixins() {\n  for (var _len = arguments.length, Ctors = new Array(_len), _key = 0; _key < _len; _key++) {\n    Ctors[_key] = arguments[_key];\n  }\n\n  return vue__WEBPACK_IMPORTED_MODULE_0___default.a.extend({\n    mixins: Ctors\n  });\n}\nfunction isPrimitive(value) {\n  var type = _typeof(value);\n\n  return value == null || type !== 'object' && type !== 'function';\n}\nfunction warn(message) {\n  if (typeof console !== 'undefined') {\n    console.warn('[vue-class-component] ' + message);\n  }\n}\n\nfunction collectDataFromConstructor(vm, Component) {\n  // override _init to prevent to init as Vue instance\n  var originalInit = Component.prototype._init;\n\n  Component.prototype._init = function () {\n    var _this = this;\n\n    // proxy to actual vm\n    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)\n\n    if (vm.$options.props) {\n      for (var key in vm.$options.props) {\n        if (!vm.hasOwnProperty(key)) {\n          keys.push(key);\n        }\n      }\n    }\n\n    keys.forEach(function (key) {\n      Object.defineProperty(_this, key, {\n        get: function get() {\n          return vm[key];\n        },\n        set: function set(value) {\n          vm[key] = value;\n        },\n        configurable: true\n      });\n    });\n  }; // should be acquired class property values\n\n\n  var data = new Component(); // restore original _init to avoid memory leak (#209)\n\n  Component.prototype._init = originalInit; // create plain data object\n\n  var plainData = {};\n  Object.keys(data).forEach(function (key) {\n    if (data[key] !== undefined) {\n      plainData[key] = data[key];\n    }\n  });\n\n  if (true) {\n    if (!(Component.prototype instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a) && Object.keys(plainData).length > 0) {\n      warn('Component class must inherit Vue or its descendant class ' + 'when class property is used.');\n    }\n  }\n\n  return plainData;\n}\n\nvar $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6\n];\nfunction componentFactory(Component) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  options.name = options.name || Component._componentTag || Component.name; // prototype props.\n\n  var proto = Component.prototype;\n  Object.getOwnPropertyNames(proto).forEach(function (key) {\n    if (key === 'constructor') {\n      return;\n    } // hooks\n\n\n    if ($internalHooks.indexOf(key) > -1) {\n      options[key] = proto[key];\n      return;\n    }\n\n    var descriptor = Object.getOwnPropertyDescriptor(proto, key);\n\n    if (descriptor.value !== void 0) {\n      // methods\n      if (typeof descriptor.value === 'function') {\n        (options.methods || (options.methods = {}))[key] = descriptor.value;\n      } else {\n        // typescript decorated data\n        (options.mixins || (options.mixins = [])).push({\n          data: function data() {\n            return _defineProperty({}, key, descriptor.value);\n          }\n        });\n      }\n    } else if (descriptor.get || descriptor.set) {\n      // computed properties\n      (options.computed || (options.computed = {}))[key] = {\n        get: descriptor.get,\n        set: descriptor.set\n      };\n    }\n  });\n  (options.mixins || (options.mixins = [])).push({\n    data: function data() {\n      return collectDataFromConstructor(this, Component);\n    }\n  }); // decorate options\n\n  var decorators = Component.__decorators__;\n\n  if (decorators) {\n    decorators.forEach(function (fn) {\n      return fn(options);\n    });\n    delete Component.__decorators__;\n  } // find super\n\n\n  var superProto = Object.getPrototypeOf(Component.prototype);\n  var Super = superProto instanceof vue__WEBPACK_IMPORTED_MODULE_0___default.a ? superProto.constructor : vue__WEBPACK_IMPORTED_MODULE_0___default.a;\n  var Extended = Super.extend(options);\n  forwardStaticMembers(Extended, Component, Super);\n\n  if (reflectionIsSupported()) {\n    copyReflectionMetadata(Extended, Component);\n  }\n\n  return Extended;\n}\nvar reservedPropertyNames = [// Unique id\n'cid', // Super Vue constructor\n'super', // Component options that will be used by the component\n'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets\n'component', 'directive', 'filter'];\nvar shouldIgnore = {\n  prototype: true,\n  arguments: true,\n  callee: true,\n  caller: true\n};\n\nfunction forwardStaticMembers(Extended, Original, Super) {\n  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable\n  Object.getOwnPropertyNames(Original).forEach(function (key) {\n    // Skip the properties that should not be overwritten\n    if (shouldIgnore[key]) {\n      return;\n    } // Some browsers does not allow reconfigure built-in properties\n\n\n    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);\n\n    if (extendedDescriptor && !extendedDescriptor.configurable) {\n      return;\n    }\n\n    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),\n    // the sub class properties may be inherited properties from the super class in TypeScript.\n    // We need to exclude such properties to prevent to overwrite\n    // the component options object which stored on the extended constructor (See #192).\n    // If the value is a referenced value (object or function),\n    // we can check equality of them and exclude it if they have the same reference.\n    // If it is a primitive value, it will be forwarded for safety.\n\n    if (!hasProto) {\n      // Only `cid` is explicitly exluded from property forwarding\n      // because we cannot detect whether it is a inherited property or not\n      // on the no `__proto__` environment even though the property is reserved.\n      if (key === 'cid') {\n        return;\n      }\n\n      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);\n\n      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {\n        return;\n      }\n    } // Warn if the users manually declare reserved properties\n\n\n    if ( true && reservedPropertyNames.indexOf(key) >= 0) {\n      warn(\"Static property name '\".concat(key, \"' declared on class '\").concat(Original.name, \"' \") + 'conflicts with reserved property name of Vue internal. ' + 'It may cause unexpected behavior of the component. Consider renaming the property.');\n    }\n\n    Object.defineProperty(Extended, key, descriptor);\n  });\n}\n\nfunction Component(options) {\n  if (typeof options === 'function') {\n    return componentFactory(options);\n  }\n\n  return function (Component) {\n    return componentFactory(Component, options);\n  };\n}\n\nComponent.registerHooks = function registerHooks(keys) {\n  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-class-component/dist/vue-class-component.esm.js?");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () {\n        injectStyles.call(\n          this,\n          (options.functional ? this.parent : this).$root.$options.shadowRoot\n        )\n      }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functional component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/Emit.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/Emit.js ***!
  \********************************************************************/
/*! exports provided: Emit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Emit\", function() { return Emit; });\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\n// Code copied from Vue/src/shared/util.js\nvar hyphenateRE = /\\B([A-Z])/g;\nvar hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };\n/**\n * decorator of an event-emitter function\n * @param  event The name of the event\n * @return MethodDecorator\n */\nfunction Emit(event) {\n    return function (_target, propertyKey, descriptor) {\n        var key = hyphenate(propertyKey);\n        var original = descriptor.value;\n        descriptor.value = function emitter() {\n            var _this = this;\n            var args = [];\n            for (var _i = 0; _i < arguments.length; _i++) {\n                args[_i] = arguments[_i];\n            }\n            var emit = function (returnValue) {\n                var emitName = event || key;\n                if (returnValue === undefined) {\n                    if (args.length === 0) {\n                        _this.$emit(emitName);\n                    }\n                    else if (args.length === 1) {\n                        _this.$emit(emitName, args[0]);\n                    }\n                    else {\n                        _this.$emit.apply(_this, __spreadArrays([emitName], args));\n                    }\n                }\n                else {\n                    args.unshift(returnValue);\n                    _this.$emit.apply(_this, __spreadArrays([emitName], args));\n                }\n            };\n            var returnValue = original.apply(this, args);\n            if (isPromise(returnValue)) {\n                returnValue.then(emit);\n            }\n            else {\n                emit(returnValue);\n            }\n            return returnValue;\n        };\n    };\n}\nfunction isPromise(obj) {\n    return obj instanceof Promise || (obj && typeof obj.then === 'function');\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/Emit.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/Inject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/Inject.js ***!
  \**********************************************************************/
/*! exports provided: Inject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Inject\", function() { return Inject; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n\n/**\n * decorator of an inject\n * @param from key\n * @return PropertyDecorator\n */\nfunction Inject(options) {\n    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, key) {\n        if (typeof componentOptions.inject === 'undefined') {\n            componentOptions.inject = {};\n        }\n        if (!Array.isArray(componentOptions.inject)) {\n            componentOptions.inject[key] = options || key;\n        }\n    });\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/Inject.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/InjectReactive.js":
/*!******************************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/InjectReactive.js ***!
  \******************************************************************************/
/*! exports provided: InjectReactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"InjectReactive\", function() { return InjectReactive; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/provideInject */ \"./node_modules/vue-property-decorator/lib/helpers/provideInject.js\");\n\n\n/**\n * decorator of a reactive inject\n * @param from key\n * @return PropertyDecorator\n */\nfunction InjectReactive(options) {\n    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, key) {\n        if (typeof componentOptions.inject === 'undefined') {\n            componentOptions.inject = {};\n        }\n        if (!Array.isArray(componentOptions.inject)) {\n            var fromKey_1 = !!options ? options.from || options : key;\n            var defaultVal_1 = (!!options && options.default) || undefined;\n            if (!componentOptions.computed)\n                componentOptions.computed = {};\n            componentOptions.computed[key] = function () {\n                var obj = this[_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[\"reactiveInjectKey\"]];\n                return obj ? obj[fromKey_1] : defaultVal_1;\n            };\n            componentOptions.inject[_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[\"reactiveInjectKey\"]] = _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[\"reactiveInjectKey\"];\n        }\n    });\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/InjectReactive.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/Model.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/Model.js ***!
  \*********************************************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/metadata */ \"./node_modules/vue-property-decorator/lib/helpers/metadata.js\");\n\n\n/**\n * decorator of model\n * @param  event event name\n * @param options options\n * @return PropertyDecorator\n */\nfunction Model(event, options) {\n    if (options === void 0) { options = {}; }\n    return function (target, key) {\n        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[\"applyMetadata\"])(options, target, key);\n        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, k) {\n            ;\n            (componentOptions.props || (componentOptions.props = {}))[k] = options;\n            componentOptions.model = { prop: k, event: event || k };\n        })(target, key);\n    };\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/Model.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/ModelSync.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/ModelSync.js ***!
  \*************************************************************************/
/*! exports provided: ModelSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ModelSync\", function() { return ModelSync; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/metadata */ \"./node_modules/vue-property-decorator/lib/helpers/metadata.js\");\n\n\n/**\n * decorator of synced model and prop\n * @param propName the name to interface with from outside, must be different from decorated property\n * @param  event event name\n * @param options options\n * @return PropertyDecorator\n */\nfunction ModelSync(propName, event, options) {\n    if (options === void 0) { options = {}; }\n    return function (target, key) {\n        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[\"applyMetadata\"])(options, target, key);\n        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, k) {\n            ;\n            (componentOptions.props || (componentOptions.props = {}))[propName] = options;\n            componentOptions.model = { prop: propName, event: event || k };\n            (componentOptions.computed || (componentOptions.computed = {}))[k] = {\n                get: function () {\n                    return this[propName];\n                },\n                set: function (value) {\n                    // @ts-ignore\n                    this.$emit(event, value);\n                },\n            };\n        })(target, key);\n    };\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/ModelSync.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/Prop.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/Prop.js ***!
  \********************************************************************/
/*! exports provided: Prop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Prop\", function() { return Prop; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/metadata */ \"./node_modules/vue-property-decorator/lib/helpers/metadata.js\");\n\n\n/**\n * decorator of a prop\n * @param  options the options for the prop\n * @return PropertyDecorator | void\n */\nfunction Prop(options) {\n    if (options === void 0) { options = {}; }\n    return function (target, key) {\n        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[\"applyMetadata\"])(options, target, key);\n        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, k) {\n            ;\n            (componentOptions.props || (componentOptions.props = {}))[k] = options;\n        })(target, key);\n    };\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/Prop.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/PropSync.js":
/*!************************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/PropSync.js ***!
  \************************************************************************/
/*! exports provided: PropSync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PropSync\", function() { return PropSync; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _helpers_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/metadata */ \"./node_modules/vue-property-decorator/lib/helpers/metadata.js\");\n\n\n/**\n * decorator of a synced prop\n * @param propName the name to interface with from outside, must be different from decorated property\n * @param options the options for the synced prop\n * @return PropertyDecorator | void\n */\nfunction PropSync(propName, options) {\n    if (options === void 0) { options = {}; }\n    return function (target, key) {\n        Object(_helpers_metadata__WEBPACK_IMPORTED_MODULE_1__[\"applyMetadata\"])(options, target, key);\n        Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, k) {\n            ;\n            (componentOptions.props || (componentOptions.props = {}))[propName] = options;\n            (componentOptions.computed || (componentOptions.computed = {}))[k] = {\n                get: function () {\n                    return this[propName];\n                },\n                set: function (value) {\n                    this.$emit(\"update:\" + propName, value);\n                },\n            };\n        })(target, key);\n    };\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/PropSync.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/Provide.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/Provide.js ***!
  \***********************************************************************/
/*! exports provided: Provide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Provide\", function() { return Provide; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/provideInject */ \"./node_modules/vue-property-decorator/lib/helpers/provideInject.js\");\n\n\n/**\n * decorator of a provide\n * @param key key\n * @return PropertyDecorator | void\n */\nfunction Provide(key) {\n    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, k) {\n        var provide = componentOptions.provide;\n        Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[\"inheritInjected\"])(componentOptions);\n        if (Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[\"needToProduceProvide\"])(provide)) {\n            provide = componentOptions.provide = Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[\"produceProvide\"])(provide);\n        }\n        provide.managed[k] = key || k;\n    });\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/Provide.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/ProvideReactive.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/ProvideReactive.js ***!
  \*******************************************************************************/
/*! exports provided: ProvideReactive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProvideReactive\", function() { return ProvideReactive; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/provideInject */ \"./node_modules/vue-property-decorator/lib/helpers/provideInject.js\");\n\n\n/**\n * decorator of a reactive provide\n * @param key key\n * @return PropertyDecorator | void\n */\nfunction ProvideReactive(key) {\n    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, k) {\n        var provide = componentOptions.provide;\n        Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[\"inheritInjected\"])(componentOptions);\n        if (Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[\"needToProduceProvide\"])(provide)) {\n            provide = componentOptions.provide = Object(_helpers_provideInject__WEBPACK_IMPORTED_MODULE_1__[\"produceProvide\"])(provide);\n        }\n        provide.managedReactive[k] = key || k;\n    });\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/ProvideReactive.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/Ref.js":
/*!*******************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/Ref.js ***!
  \*******************************************************************/
/*! exports provided: Ref */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Ref\", function() { return Ref; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n\n/**\n * decorator of a ref prop\n * @param refKey the ref key defined in template\n */\nfunction Ref(refKey) {\n    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (options, key) {\n        options.computed = options.computed || {};\n        options.computed[key] = {\n            cache: false,\n            get: function () {\n                return this.$refs[refKey || key];\n            },\n        };\n    });\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/Ref.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/VModel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/VModel.js ***!
  \**********************************************************************/
/*! exports provided: VModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VModel\", function() { return VModel; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n\n/**\n * decorator for capturings v-model binding to component\n * @param options the options for the prop\n */\nfunction VModel(options) {\n    if (options === void 0) { options = {}; }\n    var valueKey = 'value';\n    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, key) {\n        ;\n        (componentOptions.props || (componentOptions.props = {}))[valueKey] = options;\n        (componentOptions.computed || (componentOptions.computed = {}))[key] = {\n            get: function () {\n                return this[valueKey];\n            },\n            set: function (value) {\n                this.$emit('input', value);\n            },\n        };\n    });\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/VModel.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/decorators/Watch.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/decorators/Watch.js ***!
  \*********************************************************************/
/*! exports provided: Watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Watch\", function() { return Watch; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n\n/**\n * decorator of a watch function\n * @param  path the path or the expression to observe\n * @param  WatchOption\n * @return MethodDecorator\n */\nfunction Watch(path, options) {\n    if (options === void 0) { options = {}; }\n    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;\n    return Object(vue_class_component__WEBPACK_IMPORTED_MODULE_0__[\"createDecorator\"])(function (componentOptions, handler) {\n        if (typeof componentOptions.watch !== 'object') {\n            componentOptions.watch = Object.create(null);\n        }\n        var watch = componentOptions.watch;\n        if (typeof watch[path] === 'object' && !Array.isArray(watch[path])) {\n            watch[path] = [watch[path]];\n        }\n        else if (typeof watch[path] === 'undefined') {\n            watch[path] = [];\n        }\n        watch[path].push({ handler: handler, deep: deep, immediate: immediate });\n    });\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/decorators/Watch.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/helpers/metadata.js":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/helpers/metadata.js ***!
  \*********************************************************************/
/*! exports provided: applyMetadata */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyMetadata\", function() { return applyMetadata; });\n/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */\nvar reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';\nfunction applyMetadata(options, target, key) {\n    if (reflectMetadataIsSupported) {\n        if (!Array.isArray(options) &&\n            typeof options !== 'function' &&\n            !options.hasOwnProperty('type') &&\n            typeof options.type === 'undefined') {\n            var type = Reflect.getMetadata('design:type', target, key);\n            if (type !== Object) {\n                options.type = type;\n            }\n        }\n    }\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/helpers/metadata.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/helpers/provideInject.js":
/*!**************************************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/helpers/provideInject.js ***!
  \**************************************************************************/
/*! exports provided: needToProduceProvide, produceProvide, reactiveInjectKey, inheritInjected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"needToProduceProvide\", function() { return needToProduceProvide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"produceProvide\", function() { return produceProvide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reactiveInjectKey\", function() { return reactiveInjectKey; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"inheritInjected\", function() { return inheritInjected; });\nfunction needToProduceProvide(original) {\n    return (typeof original !== 'function' ||\n        (!original.managed && !original.managedReactive));\n}\nfunction produceProvide(original) {\n    var provide = function () {\n        var _this = this;\n        var rv = typeof original === 'function' ? original.call(this) : original;\n        rv = Object.create(rv || null);\n        // set reactive services (propagates previous services if necessary)\n        rv[reactiveInjectKey] = Object.create(this[reactiveInjectKey] || {});\n        for (var i in provide.managed) {\n            rv[provide.managed[i]] = this[i];\n        }\n        var _loop_1 = function (i) {\n            rv[provide.managedReactive[i]] = this_1[i]; // Duplicates the behavior of `@Provide`\n            Object.defineProperty(rv[reactiveInjectKey], provide.managedReactive[i], {\n                enumerable: true,\n                configurable: true,\n                get: function () { return _this[i]; },\n            });\n        };\n        var this_1 = this;\n        for (var i in provide.managedReactive) {\n            _loop_1(i);\n        }\n        return rv;\n    };\n    provide.managed = {};\n    provide.managedReactive = {};\n    return provide;\n}\n/** Used for keying reactive provide/inject properties */\nvar reactiveInjectKey = '__reactiveInject__';\nfunction inheritInjected(componentOptions) {\n    // inject parent reactive services (if any)\n    if (!Array.isArray(componentOptions.inject)) {\n        componentOptions.inject = componentOptions.inject || {};\n        componentOptions.inject[reactiveInjectKey] = {\n            from: reactiveInjectKey,\n            default: {},\n        };\n    }\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/helpers/provideInject.js?");

/***/ }),

/***/ "./node_modules/vue-property-decorator/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/vue-property-decorator/lib/index.js ***!
  \**********************************************************/
/*! exports provided: Component, Vue, Mixins, Emit, Inject, InjectReactive, Model, ModelSync, Prop, PropSync, Provide, ProvideReactive, Ref, VModel, Watch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"vue\");\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, \"Vue\", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Mixins\", function() { return vue_class_component__WEBPACK_IMPORTED_MODULE_1__[\"mixins\"]; });\n\n/* harmony import */ var _decorators_Emit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/Emit */ \"./node_modules/vue-property-decorator/lib/decorators/Emit.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Emit\", function() { return _decorators_Emit__WEBPACK_IMPORTED_MODULE_2__[\"Emit\"]; });\n\n/* harmony import */ var _decorators_Inject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/Inject */ \"./node_modules/vue-property-decorator/lib/decorators/Inject.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Inject\", function() { return _decorators_Inject__WEBPACK_IMPORTED_MODULE_3__[\"Inject\"]; });\n\n/* harmony import */ var _decorators_InjectReactive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/InjectReactive */ \"./node_modules/vue-property-decorator/lib/decorators/InjectReactive.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"InjectReactive\", function() { return _decorators_InjectReactive__WEBPACK_IMPORTED_MODULE_4__[\"InjectReactive\"]; });\n\n/* harmony import */ var _decorators_Model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/Model */ \"./node_modules/vue-property-decorator/lib/decorators/Model.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return _decorators_Model__WEBPACK_IMPORTED_MODULE_5__[\"Model\"]; });\n\n/* harmony import */ var _decorators_ModelSync__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/ModelSync */ \"./node_modules/vue-property-decorator/lib/decorators/ModelSync.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ModelSync\", function() { return _decorators_ModelSync__WEBPACK_IMPORTED_MODULE_6__[\"ModelSync\"]; });\n\n/* harmony import */ var _decorators_Prop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/Prop */ \"./node_modules/vue-property-decorator/lib/decorators/Prop.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Prop\", function() { return _decorators_Prop__WEBPACK_IMPORTED_MODULE_7__[\"Prop\"]; });\n\n/* harmony import */ var _decorators_PropSync__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/PropSync */ \"./node_modules/vue-property-decorator/lib/decorators/PropSync.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"PropSync\", function() { return _decorators_PropSync__WEBPACK_IMPORTED_MODULE_8__[\"PropSync\"]; });\n\n/* harmony import */ var _decorators_Provide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./decorators/Provide */ \"./node_modules/vue-property-decorator/lib/decorators/Provide.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Provide\", function() { return _decorators_Provide__WEBPACK_IMPORTED_MODULE_9__[\"Provide\"]; });\n\n/* harmony import */ var _decorators_ProvideReactive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./decorators/ProvideReactive */ \"./node_modules/vue-property-decorator/lib/decorators/ProvideReactive.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ProvideReactive\", function() { return _decorators_ProvideReactive__WEBPACK_IMPORTED_MODULE_10__[\"ProvideReactive\"]; });\n\n/* harmony import */ var _decorators_Ref__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./decorators/Ref */ \"./node_modules/vue-property-decorator/lib/decorators/Ref.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Ref\", function() { return _decorators_Ref__WEBPACK_IMPORTED_MODULE_11__[\"Ref\"]; });\n\n/* harmony import */ var _decorators_VModel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./decorators/VModel */ \"./node_modules/vue-property-decorator/lib/decorators/VModel.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VModel\", function() { return _decorators_VModel__WEBPACK_IMPORTED_MODULE_12__[\"VModel\"]; });\n\n/* harmony import */ var _decorators_Watch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./decorators/Watch */ \"./node_modules/vue-property-decorator/lib/decorators/Watch.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Watch\", function() { return _decorators_Watch__WEBPACK_IMPORTED_MODULE_13__[\"Watch\"]; });\n\n/** vue-property-decorator verson 9.1.2 MIT LICENSE copyright 2020 kaorun343 */\n/// <reference types='reflect-metadata'/>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-property-decorator/lib/index.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/my-button/src/MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/my-button/src/MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss& */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/my-button/src/MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss&\");\nif(content.__esModule) content = content.default;\nif(typeof content === 'string') content = [[module.i, content, '']];\nif(content.locals) module.exports = content.locals;\n// add the styles to the DOM\nvar add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ \"./node_modules/vue-style-loader/lib/addStylesClient.js\").default\nvar update = add(\"06eeb3d8\", content, false, {\"sourceMap\":false,\"shadowMode\":false});\n// Hot Module Replacement\nif(false) {}\n\n//# sourceURL=webpack://vue-tabs-chrome/./packages/my-button/src/MyButton.vue?./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addStylesClient; });\n/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ \"./node_modules/vue-style-loader/lib/listToStyles.js\");\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n  Modified by Evan You @yyx990803\n*/\n\n\n\nvar hasDocument = typeof document !== 'undefined'\n\nif (typeof DEBUG !== 'undefined' && DEBUG) {\n  if (!hasDocument) {\n    throw new Error(\n    'vue-style-loader cannot be used in a non-browser environment. ' +\n    \"Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.\"\n  ) }\n}\n\n/*\ntype StyleObject = {\n  id: number;\n  parts: Array<StyleObjectPart>\n}\n\ntype StyleObjectPart = {\n  css: string;\n  media: string;\n  sourceMap: ?string\n}\n*/\n\nvar stylesInDom = {/*\n  [id: number]: {\n    id: number,\n    refs: number,\n    parts: Array<(obj?: StyleObjectPart) => void>\n  }\n*/}\n\nvar head = hasDocument && (document.head || document.getElementsByTagName('head')[0])\nvar singletonElement = null\nvar singletonCounter = 0\nvar isProduction = false\nvar noop = function () {}\nvar options = null\nvar ssrIdKey = 'data-vue-ssr-id'\n\n// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n// tags it will allow on a page\nvar isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())\n\nfunction addStylesClient (parentId, list, _isProduction, _options) {\n  isProduction = _isProduction\n\n  options = _options || {}\n\n  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, list)\n  addStylesToDom(styles)\n\n  return function update (newList) {\n    var mayRemove = []\n    for (var i = 0; i < styles.length; i++) {\n      var item = styles[i]\n      var domStyle = stylesInDom[item.id]\n      domStyle.refs--\n      mayRemove.push(domStyle)\n    }\n    if (newList) {\n      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(parentId, newList)\n      addStylesToDom(styles)\n    } else {\n      styles = []\n    }\n    for (var i = 0; i < mayRemove.length; i++) {\n      var domStyle = mayRemove[i]\n      if (domStyle.refs === 0) {\n        for (var j = 0; j < domStyle.parts.length; j++) {\n          domStyle.parts[j]()\n        }\n        delete stylesInDom[domStyle.id]\n      }\n    }\n  }\n}\n\nfunction addStylesToDom (styles /* Array<StyleObject> */) {\n  for (var i = 0; i < styles.length; i++) {\n    var item = styles[i]\n    var domStyle = stylesInDom[item.id]\n    if (domStyle) {\n      domStyle.refs++\n      for (var j = 0; j < domStyle.parts.length; j++) {\n        domStyle.parts[j](item.parts[j])\n      }\n      for (; j < item.parts.length; j++) {\n        domStyle.parts.push(addStyle(item.parts[j]))\n      }\n      if (domStyle.parts.length > item.parts.length) {\n        domStyle.parts.length = item.parts.length\n      }\n    } else {\n      var parts = []\n      for (var j = 0; j < item.parts.length; j++) {\n        parts.push(addStyle(item.parts[j]))\n      }\n      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }\n    }\n  }\n}\n\nfunction createStyleElement () {\n  var styleElement = document.createElement('style')\n  styleElement.type = 'text/css'\n  head.appendChild(styleElement)\n  return styleElement\n}\n\nfunction addStyle (obj /* StyleObjectPart */) {\n  var update, remove\n  var styleElement = document.querySelector('style[' + ssrIdKey + '~=\"' + obj.id + '\"]')\n\n  if (styleElement) {\n    if (isProduction) {\n      // has SSR styles and in production mode.\n      // simply do nothing.\n      return noop\n    } else {\n      // has SSR styles but in dev mode.\n      // for some reason Chrome can't handle source map in server-rendered\n      // style tags - source maps in <style> only works if the style tag is\n      // created and inserted dynamically. So we remove the server rendered\n      // styles and inject new ones.\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  if (isOldIE) {\n    // use singleton mode for IE9.\n    var styleIndex = singletonCounter++\n    styleElement = singletonElement || (singletonElement = createStyleElement())\n    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)\n    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)\n  } else {\n    // use multi-style-tag mode in all other cases\n    styleElement = createStyleElement()\n    update = applyToTag.bind(null, styleElement)\n    remove = function () {\n      styleElement.parentNode.removeChild(styleElement)\n    }\n  }\n\n  update(obj)\n\n  return function updateStyle (newObj /* StyleObjectPart */) {\n    if (newObj) {\n      if (newObj.css === obj.css &&\n          newObj.media === obj.media &&\n          newObj.sourceMap === obj.sourceMap) {\n        return\n      }\n      update(obj = newObj)\n    } else {\n      remove()\n    }\n  }\n}\n\nvar replaceText = (function () {\n  var textStore = []\n\n  return function (index, replacement) {\n    textStore[index] = replacement\n    return textStore.filter(Boolean).join('\\n')\n  }\n})()\n\nfunction applyToSingletonTag (styleElement, index, remove, obj) {\n  var css = remove ? '' : obj.css\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = replaceText(index, css)\n  } else {\n    var cssNode = document.createTextNode(css)\n    var childNodes = styleElement.childNodes\n    if (childNodes[index]) styleElement.removeChild(childNodes[index])\n    if (childNodes.length) {\n      styleElement.insertBefore(cssNode, childNodes[index])\n    } else {\n      styleElement.appendChild(cssNode)\n    }\n  }\n}\n\nfunction applyToTag (styleElement, obj) {\n  var css = obj.css\n  var media = obj.media\n  var sourceMap = obj.sourceMap\n\n  if (media) {\n    styleElement.setAttribute('media', media)\n  }\n  if (options.ssrId) {\n    styleElement.setAttribute(ssrIdKey, obj.id)\n  }\n\n  if (sourceMap) {\n    // https://developer.chrome.com/devtools/docs/javascript-debugging\n    // this makes source maps inside style tags work properly in Chrome\n    css += '\\n/*# sourceURL=' + sourceMap.sources[0] + ' */'\n    // http://stackoverflow.com/a/26603875\n    css += '\\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'\n  }\n\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild)\n    }\n    styleElement.appendChild(document.createTextNode(css))\n  }\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-style-loader/lib/addStylesClient.js?");

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/listToStyles.js":
/*!***********************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return listToStyles; });\n/**\n * Translates the list format produced by css-loader into something\n * easier to manipulate.\n */\nfunction listToStyles (parentId, list) {\n  var styles = []\n  var newStyles = {}\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i]\n    var id = item[0]\n    var css = item[1]\n    var media = item[2]\n    var sourceMap = item[3]\n    var part = {\n      id: parentId + ':' + i,\n      css: css,\n      media: media,\n      sourceMap: sourceMap\n    }\n    if (!newStyles[id]) {\n      styles.push(newStyles[id] = { id: id, parts: [part] })\n    } else {\n      newStyles[id].parts.push(part)\n    }\n  }\n  return styles\n}\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./node_modules/vue-style-loader/lib/listToStyles.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://vue-tabs-chrome/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./packages/my-button/index.ts":
/*!*************************************!*\
  !*** ./packages/my-button/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_MyButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/MyButton */ \"./packages/my-button/src/MyButton.vue\");\n\n// @ts-ignore\n\n/* istanbul ignore next */\n\n_src_MyButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].install = function (Vue) {\n  Vue.component(_src_MyButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name, _src_MyButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_src_MyButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://vue-tabs-chrome/./packages/my-button/index.ts?");

/***/ }),

/***/ "./packages/my-button/src/MyButton.vue":
/*!*********************************************!*\
  !*** ./packages/my-button/src/MyButton.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _MyButton_vue_vue_type_template_id_333d8cc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyButton.vue?vue&type=template&id=333d8cc9&scoped=true& */ \"./packages/my-button/src/MyButton.vue?vue&type=template&id=333d8cc9&scoped=true&\");\n/* harmony import */ var _MyButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyButton.vue?vue&type=script&lang=ts& */ \"./packages/my-button/src/MyButton.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _MyButton_vue_vue_type_style_index_0_id_333d8cc9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss& */ \"./packages/my-button/src/MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _MyButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _MyButton_vue_vue_type_template_id_333d8cc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _MyButton_vue_vue_type_template_id_333d8cc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"333d8cc9\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"packages/my-button/src/MyButton.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://vue-tabs-chrome/./packages/my-button/src/MyButton.vue?");

/***/ }),

/***/ "./packages/my-button/src/MyButton.vue?vue&type=script&lang=ts&":
/*!**********************************************************************!*\
  !*** ./packages/my-button/src/MyButton.vue?vue&type=script&lang=ts& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_plugin_typescript_node_modules_ts_loader_index_js_ref_13_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader??ref--13-2!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyButton.vue?vue&type=script&lang=ts& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/cli-plugin-typescript/node_modules/ts-loader/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/my-button/src/MyButton.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_vue_cli_plugin_typescript_node_modules_ts_loader_index_js_ref_13_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://vue-tabs-chrome/./packages/my-button/src/MyButton.vue?");

/***/ }),

/***/ "./packages/my-button/src/MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./packages/my-button/src/MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_style_index_0_id_333d8cc9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss& */ \"./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/my-button/src/MyButton.vue?vue&type=style&index=0&id=333d8cc9&scoped=true&lang=scss&\");\n/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_style_index_0_id_333d8cc9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_style_index_0_id_333d8cc9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_style_index_0_id_333d8cc9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_style_index_0_id_333d8cc9_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./packages/my-button/src/MyButton.vue?");

/***/ }),

/***/ "./packages/my-button/src/MyButton.vue?vue&type=template&id=333d8cc9&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./packages/my-button/src/MyButton.vue?vue&type=template&id=333d8cc9&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b3ed7de_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_template_id_333d8cc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"2b3ed7de-vue-loader-template\"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyButton.vue?vue&type=template&id=333d8cc9&scoped=true& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"2b3ed7de-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./packages/my-button/src/MyButton.vue?vue&type=template&id=333d8cc9&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b3ed7de_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_template_id_333d8cc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_2b3ed7de_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyButton_vue_vue_type_template_id_333d8cc9_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://vue-tabs-chrome/./packages/my-button/src/MyButton.vue?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _packages_my_button_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../packages/my-button/index */ \"./packages/my-button/index.ts\");\n\n// src/index.js 示例，主要是引入(import)组件再导出(export)，包括Vue.use所需的 install函数处理\n\nvar components = [_packages_my_button_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]; // Vue.use() 一次性安装所有组件\n\nvar install = function install(Vue) {\n  components.forEach(function (component) {\n    return Vue.use(component);\n  }); // 如果没有在src/index.js里实现install方法，就需要使用下面的\n  // components.forEach(component => Vue.component(component.name, component))\n};\n/* istanbul ignore if */\n\n\nif (typeof window !== 'undefined' && window.Vue) {\n  install(window.Vue);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  install: install,\n  MyButton: _packages_my_button_index__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n//# sourceURL=webpack://vue-tabs-chrome/./src/index.ts?");

/***/ }),

/***/ "vue":
/*!******************************************************************!*\
  !*** external {"commonjs":"vue","commonjs2":"vue","root":"Vue"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"vue\");\n\n//# sourceURL=webpack://vue-tabs-chrome/external_%7B%22commonjs%22:%22vue%22,%22commonjs2%22:%22vue%22,%22root%22:%22Vue%22%7D?");

/***/ })

/******/ });