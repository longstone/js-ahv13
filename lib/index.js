(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidatorAHV13 = function () {
    function ValidatorAHV13() {
        _classCallCheck(this, ValidatorAHV13);
    }

    _createClass(ValidatorAHV13, [{
        key: '_removeDots',
        value: function _removeDots(ahv13) {
            return ahv13.split('.').join("");
        }

        /**
         * AHV Number in reversed order, without checksum
         * @param ahv12
         * @returns {number}
         * @private
         */

    }, {
        key: 'calculateCheckSum',
        value: function calculateCheckSum(ahv12) {
            var totalChecksum = 0;
            for (var i = 0; i < ahv12.length; i++) {
                var number = ahv12[i];
                if (i % 2 === 0) {
                    totalChecksum = totalChecksum + 13 * number;
                } else {
                    totalChecksum = totalChecksum + number;
                }
            }
            return totalChecksum;
        }

        /**
         * validates a AHV13 Number with or without dots in the form of '756.9217.0769.85'
         * @param ahv13
         * @returns {boolean}
         */

    }, {
        key: 'isValid',
        value: function isValid(ahv13) {
            var cleanedAHV13 = this._removeDots(ahv13);
            var ahvArray = cleanedAHV13.split('').reverse().map(function (number) {
                return parseInt(number);
            });
            var check = ahvArray.shift();
            return this.calculateCheckSum(ahvArray) % 10 === check;
        }
    }]);

    return ValidatorAHV13;
}();

module.exports = ValidatorAHV13;

/***/ })
/******/ ])));
//# sourceMappingURL=index.js.map