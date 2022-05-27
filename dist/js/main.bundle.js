/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n\n\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.modal)();\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__.scroll)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({\n    timing,\n    draw,\n    duration\n}) => {\n\n    let start = performance.now();\n\n    requestAnimationFrame(function animate(time) {\n        // timeFraction изменяется от 0 до 1\n        let timeFraction = (time - start) / duration;\n        if (timeFraction > 1) timeFraction = 1;\n\n        // вычисление текущего состояния анимации\n        let progress = timing(timeFraction);\n\n        draw(progress); // отрисовать её\n\n        if (timeFraction < 1) {\n            requestAnimationFrame(animate);\n        }\n\n    });\n};\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modal\": () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\nconst modal = () => {\n    document.addEventListener('DOMContentLoaded', onDomReady);\n\n    function onDomReady() {\n        const modal = document.querySelector('.modal__services');\n        const btn = document.querySelector('.modal-services');\n        const closeBtn = document.querySelector('.close__btn');\n\n        const modalAbout = document.querySelector('.about__modal');\n        const btnAbout = document.querySelector('.about-btn');\n        const closeBtnAbout = document.querySelector('.about__close');\n\n        const closeModal = () => {\n            modal.style.display = 'none';\n        };\n        const openModal = () => {\n            modal.style.display = 'block';\n        };\n\n        const close = () => {\n            modalAbout.style.display = 'none';\n        };\n        const open = () => {\n            modalAbout.style.display = 'block';\n        };\n\n        btn.addEventListener('click', e => {\n            e.preventDefault();\n            e.stopPropagation();\n            openModal();\n        });\n\n        modal.addEventListener('click', e => {\n            e.stopPropagation();\n        });\n\n        btnAbout.addEventListener('click', e => {\n            e.preventDefault();\n            e.stopPropagation();\n            open();\n        });\n\n        modalAbout.addEventListener('click', e => {\n            e.stopPropagation();\n        });\n\n        document.addEventListener('click', closeModal);\n        closeBtn.addEventListener('click', closeModal);\n\n        document.addEventListener('click', close);\n        closeBtnAbout.addEventListener('click', close);\n    }\n};\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"scroll\": () => (/* binding */ scroll)\n/* harmony export */ });\nconst scroll = () => {\n    const menu = document.querySelectorAll('ul>li>a');\n\n    const allLinks = [...menu];\n\n    allLinks.forEach(link => {\n        link.addEventListener('click', event => {\n            event.preventDefault();\n\n            const id = link.getAttribute('href').substring(1);\n            const section = document.getElementById(id);\n\n            if (section) {\n                section.scrollIntoView({\n                    behavior: \"smooth\",\n                    block: \"start\",\n                    inline: \"center\",\n                });\n            }\n        });\n    });\n};\n\n//# sourceURL=webpack:///./modules/scroll.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;