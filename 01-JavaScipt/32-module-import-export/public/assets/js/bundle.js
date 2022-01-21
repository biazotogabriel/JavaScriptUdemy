/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "idade": () => (/* binding */ idade),
/* harmony export */   "soma": () => (/* binding */ soma),
/* harmony export */   "Pessoa": () => (/* binding */ Pessoa)
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var nome = 'Gabriel';
var sobrenome = 'Biazoto';
var idade = 30;
function soma(x, y) {
  return Number(x) + Number(y);
}
var Pessoa = /*#__PURE__*/_createClass(function Pessoa(nome, sobrenome) {
  _classCallCheck(this, Pessoa);

  this.nome = nome;
  this.sobrenome = sobrenome;
});

/***/ }),

/***/ "./src/modulo2.js":
/*!************************!*\
  !*** ./src/modulo2.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ soma),
/* harmony export */   "nome": () => (/* binding */ nome),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "idade": () => (/* binding */ idade)
/* harmony export */ });
function soma(x, y) {
  // exporta essa função como padrão. Pode haver apenas 1 função default
  return Number(x) + Number(y);
}
var nome = 'Gabriel';
var sobrenome = 'Biazoto';
var idade = 30;

/***/ }),

/***/ "./src/modulo3.js":
/*!************************!*\
  !*** ./src/modulo3.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ nome),
/* harmony export */   "sobrenome": () => (/* binding */ sobrenome),
/* harmony export */   "idade": () => (/* binding */ idade)
/* harmony export */ });
var nome = 'Rafael';
var sobrenome = 'Biazoto';
var idade = 25;
 //exportando constante como default

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1.js */ "./src/modulo1.js");
/* harmony import */ var _modulo2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modulo2.js */ "./src/modulo2.js");
/* harmony import */ var _modulo3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modulo3.js */ "./src/modulo3.js");


var nome = 'João';
var pessoa = new _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.Pessoa(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__.nome, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.sobrenome);
console.log(nome, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.sobrenome, _modulo1_js__WEBPACK_IMPORTED_MODULE_0__.idade, pessoa);
console.log(_modulo1_js__WEBPACK_IMPORTED_MODULE_0__); //sempre que importar sem chaves estará sendo importado o default

 // neste ponto o javascript importará o export dafault. NÃO PRECISA DE CHAVES {} para definir oque esta sendo importado pois já tem o default

console.log(_modulo2_js__WEBPACK_IMPORTED_MODULE_1__["default"]); // que no caso do modulo2 era a função soma que passa a se chamar qualquerCoisa

 //importando constante como default. Só muda na exportação

console.log(_modulo3_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
 //é possivel importar o default e as constantes tambem

console.log(_modulo3_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map