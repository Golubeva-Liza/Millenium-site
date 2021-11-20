/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/form.js":
/*!********************************!*\
  !*** ./src/js/modules/form.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function sendForm() {
  const form = document.querySelector('.modal__form');
  const selector = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);
  let formData = new FormData(form);
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log('отправлено');
    }
  };

  xhr.open('POST', 'mail.php', true);
  xhr.send(formData);
  form.reset();
}

/* harmony default export */ __webpack_exports__["default"] = (sendForm);

/***/ }),

/***/ "./src/js/modules/menu.js":
/*!********************************!*\
  !*** ./src/js/modules/menu.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function menu(targetBtnSelector) {
  const menu = document.querySelector('.header__menu');
  const hamburger = document.querySelector('#hamburger');
  const targetBtns = document.querySelectorAll(targetBtnSelector);
  targetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('header__hamburger')) {
        btn.classList.toggle('header__hamburger_active');
      }

      if (btn.classList.contains('header__close-menu-btn')) {
        hamburger.classList.remove('header__hamburger_active');
      }

      menu.classList.toggle('header__menu_active');
    });
  });
}

/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

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
      document.body.style.paddingRight = '16px';
      document.querySelector('.header').style.paddingRight = '16px';
      modal.addEventListener('click', closeModal, false);
    });
  }); //закрытие модального окна по серой подложке

  function closeModal(e) {
    if (e.target.classList.contains('row') || e.target.classList.contains('modal')) {
      modal.classList.remove('modal_active');
      document.body.style.overflowY = 'scroll';
      document.body.style.paddingRight = 0;
      document.querySelector('.header').style.paddingRight = 0; // modal.removeEventListener('click', closeModal, false); - необязательно убирать, тк работает на modal
    } // console.log(e.target);

  } //закрытие модального окна по крестику


  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.body.style.overflowY = 'scroll';
    document.body.style.paddingRight = 0;
    document.querySelector('.header').style.paddingRight = 0;
  });
}

/* harmony default export */ __webpack_exports__["default"] = (modal);

/***/ }),

/***/ "./src/js/modules/progressBar.js":
/*!***************************************!*\
  !*** ./src/js/modules/progressBar.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function progressBar() {
  const parent = document.querySelector('.stages__row');
  const progressBar = document.querySelector('.progress-bar');
  const cards = document.querySelectorAll('.stage-card');
  const progressBarItems = progressBar.querySelectorAll('.progress-bar__item');
  const progressBarLine = progressBar.querySelector('.progress-bar__active-line');
  let i = 0; //+ проверка при запуске

  window.addEventListener('scroll', function () {
    const progressBarTop = progressBar.getBoundingClientRect().top;

    if (progressBarTop == 155) {
      const scroll = progressBarLine.getBoundingClientRect().top + window.pageYOffset; //сколько прокрутили от верха документа

      const top = parent.offsetTop + document.querySelector('.stages').offsetTop; //расстояние от начала offsetParent до элемента stages__row
      //в данном случае, offsetParent - тег main, который расположен в самом верху страницы, так что равносильно началу документа
      //scroll - top = сколько пикселей проскролили. по итогу максимально это число равно высоте parent

      const scrollProcent = Math.round((scroll - top) * 100 / parent.offsetHeight) + '%'; //сколько прокручено в процентах относительно высоты блока stages__row
      // console.log(`от верха ${scroll}`);
      // console.log(`топ родителя ${top}`);
      // console.log(`высота блока ${parent.offsetHeight}`);
      // console.log(scroll - top);
      // console.log(scrollProcent);

      progressBarLine.style.height = scrollProcent;
      cards.forEach((item, i) => {
        if (item.getBoundingClientRect().top <= progressBarTop + 150 && item.getBoundingClientRect().bottom > progressBarTop) {
          // console.log(`скролбар ${item.getBoundingClientRect().top}`);
          // console.log(`прокручивается номер ${i+1}`);
          progressBarItems[i].classList.add('progress-bar__item_active');
        }

        if (item.getBoundingClientRect().top > progressBarTop + 150 && progressBarItems[i].classList.contains('progress-bar__item_active')) {
          progressBarItems[i].classList.remove('progress-bar__item_active');
        }
      });
    } // console.log(`скролбар ${progressBar.getBoundingClientRect().top}`);
    // console.log(`карта ${cards[0].getBoundingClientRect().bottom}`);
    // while (i < 3) {
    //    alert( i );
    //    i++;
    // }

  });
}

/* harmony default export */ __webpack_exports__["default"] = (progressBar);

/***/ }),

/***/ "./src/js/modules/sertifSlider.js":
/*!****************************************!*\
  !*** ./src/js/modules/sertifSlider.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function sertifSlider() {
  window.addEventListener('resize', () => {
    if (document.documentElement.clientWidth < 765 && !document.querySelector('.certificates__wrapper').classList.contains('slick-slider')) {
      $('.certificates__wrapper').slick({
        dots: true,
        variableWidth: true
      });
    } else if (document.documentElement.clientWidth > 765 && document.querySelector('.certificates__wrapper').classList.contains('slick-slider')) {
      $('.certificates__wrapper').slick('unslick');
    }

    if (document.documentElement.clientWidth < 470 && document.querySelector('.slick-arrow').style.display == 'block') {
      console.log('ffff');
      document.querySelectorAll('.slick-arrow').forEach(button => {
        button.style.display = 'none';
      });
    } else if (document.documentElement.clientWidth > 470 && document.querySelector('.slick-arrow').style.display == 'none') {
      document.querySelectorAll('.slick-arrow').forEach(button => {
        button.style.display = 'block';
      });
    } // 765px
    // console.log(document.documentElement.clientWidth);

  });
  $('.certificates__wrapper').slick({
    dots: true
  });
}

/* harmony default export */ __webpack_exports__["default"] = (sertifSlider);

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
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ "./src/js/modules/menu.js");
/* harmony import */ var _modules_progressBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/progressBar */ "./src/js/modules/progressBar.js");
/* harmony import */ var _modules_sertifSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/sertifSlider */ "./src/js/modules/sertifSlider.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/form */ "./src/js/modules/form.js");





document.addEventListener('DOMContentLoaded', () => {
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__["default"])("#orderСall");
  (0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__["default"])("[data-menu-close]");
  (0,_modules_progressBar__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_sertifSlider__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_modules_form__WEBPACK_IMPORTED_MODULE_4__["default"])();
  window.addEventListener('scroll', function () {
    if (window.pageYOffset != 0) {
      document.querySelector('.header').classList.add('header_scroll');
    } else {
      document.querySelector('.header').classList.remove('header_scroll');
    }
  });
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map