/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function modal(targetBtnSelector) {
  const targetBtns = document.querySelectorAll(targetBtnSelector);
  const modal = document.querySelector('.modal');
  const closeBtn = modal.querySelector('#close'); //появление модального окна

  targetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.add('modal_active');
      document.body.style.overflowY = 'hidden';
      modal.addEventListener('click', closeModal, false);
    });
  }); //закрытие модального окна по серой подложке

  function closeModal(e) {
    if (e.target.classList.contains('row') || e.target.classList.contains('modal')) {
      modal.classList.remove('modal_active');
      document.body.style.overflowY = 'scroll'; // modal.removeEventListener('click', closeModal, false); - необязательно убирать, тк работает на modal
    } // console.log(e.target);

  } //закрытие модального окна по крестику


  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.body.style.overflowY = 'scroll';
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");

document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])("#orderСall");
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map