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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/addPage.js":
/*!***********************************!*\
  !*** ./src/js/modules/addPage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement.js */ \"./src/js/modules/createElement.js\");\n/* harmony import */ var _bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n\n\n\nfunction addPage(data, template) {\n  var catalog = document.querySelector(_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrap);\n  data.forEach(function (book) {\n    var card = Object(_createElement_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(book, _bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    catalog.appendChild(card);\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addPage);\n\n//# sourceURL=webpack:///./src/js/modules/addPage.js?");

/***/ }),

/***/ "./src/js/modules/bookCardTemplate.js":
/*!********************************************!*\
  !*** ./src/js/modules/bookCardTemplate.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bookCardTemplate = {\n  wrap: '.j-tabs',\n  tag: 'div',\n  tagClass: 'book-card',\n  setContent: function setContent(book) {\n    return \"<a href=\\\"\".concat(book.uri, \"\\\" class=\\\"book-card__link\\\">\\n          <h2 class=\\\"book-card__title\\\">\").concat(book.name, \"</h2>\\n          <img class=\\\"book-card__img\\\" src=\\\"img/\").concat(book.uri, \".png\\\" alt=\\\"picture\\\">\\n          <p class=\\\"book-card__descr\\\">\").concat(book.desc, \"</p>\\n          <div class=\\\"book-card__price\\\">\").concat(book.price, \" \\u0420</div></a>\"); // return `<h2 class=\"book__name\">${book.name}</h2>\n    //   <p class=\"book__age\">Возраст: ${book.age}</p>\n    //   <a href=\"${book.socialLink}\" class=\"book__link\">${book.socialName}</a>`;\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookCardTemplate); // desc: \n// name:\n// price:\n// type:\n// uri:\n\n//# sourceURL=webpack:///./src/js/modules/bookCardTemplate.js?");

/***/ }),

/***/ "./src/js/modules/bookData.js":
/*!************************************!*\
  !*** ./src/js/modules/bookData.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar bookData = {\n  books: [{\n    name: 'Латеральная логика',\n    descr: 'Головоломный путь к нестандартному мышлению',\n    price: '500',\n    img: 'book-s1.jpg',\n    Link: 'vk.com'\n  }, {\n    name: 'Путеводитель по лжи',\n    descr: 'Критическое мышление в эпоху постправды',\n    price: '630',\n    img: 'book-s2.jpg',\n    Link: 'vk.com'\n  }, {\n    name: 'Дао физики',\n    descr: 'Исследование параллелей между современной физикой и восточной философией',\n    price: '560',\n    img: 'book-s3.jpg',\n    Link: 'vk.com'\n  }]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (bookData);\n\n//# sourceURL=webpack:///./src/js/modules/bookData.js?");

/***/ }),

/***/ "./src/js/modules/createElement.js":
/*!*****************************************!*\
  !*** ./src/js/modules/createElement.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction createElement(book, template) {\n  var nodeElement = document.createElement(template.tag);\n  nodeElement.classList.add(template.tagClass);\n  nodeElement.innerHTML = template.setContent(book);\n  console.log(template.setContent(book));\n  return nodeElement;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createElement);\n\n//# sourceURL=webpack:///./src/js/modules/createElement.js?");

/***/ }),

/***/ "./src/js/modules/sendRequest.js":
/*!***************************************!*\
  !*** ./src/js/modules/sendRequest.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction sendRequest(data, onSuccess) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', data);\n  xhr.send();\n\n  xhr.onreadystatechange = function () {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      var responseObj = JSON.parse(xhr.responseText);\n      onSuccess(responseObj); // const request = JSON.parse(xhr.responseText);\n      // const wrap = document.querySelector(bookCardTemplate.wrap);\n      //   if (wrap.children) {\n      //     wrap.innerHTML = '';\n      //   }\n      //   if (document.querySelector(bookCardTemplate.wrap)) {\n      //     addPage(request.items, bookCardTemplate);\n      //   }\n    } else {\n      console.log(\"\\u0416\\u0434\\u0443 \\u0437\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0438: \".concat(xhr.readyState));\n    }\n  };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendRequest);\n\n//# sourceURL=webpack:///./src/js/modules/sendRequest.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_addPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/addPage.js */ \"./src/js/modules/addPage.js\");\n/* harmony import */ var _modules_bookData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/bookData.js */ \"./src/js/modules/bookData.js\");\n/* harmony import */ var _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/bookCardTemplate.js */ \"./src/js/modules/bookCardTemplate.js\");\n/* harmony import */ var _modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sendRequest.js */ \"./src/js/modules/sendRequest.js\");\n\n\n\n // import slider from './modules/slider.js';\n// function ready(fn) {\n//   if (document.attachEvent ? document.readyState === \"complete\" : document.readyState !== \"loading\"){\n//     fn();\n//   } else {\n//     document.addEventListener('DOMContentLoaded', fn);\n//   }\n// }\n// ready(function(){\n// });\n// Подключение слайдера\n\n$('.j-slider').slick(); // объекты для Ajax запроса\n\nvar data = {\n  page: 1,\n  perPage: 8,\n  type: ''\n};\nvar wrap = document.querySelector(_modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].wrap);\n\nif (wrap) {\n  var dataAjax = createDataAjax();\n  Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dataAjax, function (responseObj) {\n    if (wrap.children) {\n      wrap.innerHTML = '';\n    }\n\n    Object(_modules_addPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseObj.items, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  });\n} // const dataAjax = createDataAjax();\n// sendRequest(dataAjax, function(responseText) {\n//   const wrap = document.querySelector(bookCardTemplate.wrap);\n//   if (wrap.children) {\n//     wrap.innerHTML = '';\n//   }\n//   if (document.querySelector(bookCardTemplate.wrap)) {\n//     addPage(request.items, bookCardTemplate);\n//   }\n// });\n// Вешаем слушателя на табы\n\n\nvar tabsWrap = document.querySelector('.j-tabs');\nvar tabsArray = Array.from(tabsWrap.children);\ntabsArray.forEach(function (tab) {\n  var link = tab.firstElementChild;\n  link.addEventListener('click', function (event) {\n    event.preventDefault();\n    data.type = event.target.dataset.type;\n    var dataAjax = createDataAjax();\n    Object(_modules_sendRequest_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(dataAjax, function (responseObj) {\n      if (wrap.children) {\n        wrap.innerHTML = '';\n      }\n\n      Object(_modules_addPage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(responseObj.items, _modules_bookCardTemplate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n    });\n  }); // const type = link.dataset.type;\n}); // Функция подготовки url'а для GET запроса\n\nfunction createDataAjax() {\n  if (window.matchMedia(\"(min-width: 768px)\").matches) {\n    data.perPage = 8;\n  } else {\n    data.perPage = 3;\n  }\n\n  return \"https://api.do-epixx.ru/htmlpro/bookstore/books/get/\".concat(data.page, \"/\").concat(data.perPage, \"/\").concat(data.type);\n}\n\n;\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });