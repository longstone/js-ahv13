'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValidatorAHV13 = function () {
    function ValidatorAHV13() {
        _classCallCheck(this, ValidatorAHV13);
    }

    _createClass(ValidatorAHV13, [{
        key: '_calculateCheckSum',
        value: function _calculateCheckSum(ahv12) {
            var totalChecksum = 0;
            for (var i = 0; i < ahv12.length; i++) {
                var number = ahv12[i];
                if (i % 2 === 0) {
                    totalChecksum = totalChecksum + 13 * number;
                } else {
                    totalChecksum = totalChecksum + number;
                }
            }
            var nextTimesTen = Math.ceil(totalChecksum / 10) * 10;
            return nextTimesTen - totalChecksum;
        }
    }, {
        key: '_preProcessArray',
        value: function _preProcessArray(arr) {
            return arr.split('.').join('').split('').reverse().map(function (number) {
                return parseInt(number);
            });
        }
        /**
         * AHV Number without last number, like: ('756.9217.0769.8')
         * @param ahv12
         * @returns {number} for this case 5
         * @private
         */

    }, {
        key: 'checkSum',
        value: function checkSum(ahvnumber) {
            return this._calculateCheckSum(this._preProcessArray(ahvnumber));
        }

        /**
         * validates a AHV13 Number with or without dots in the form of '756.9217.0769.85'
         * @param ahv13
         * @returns {boolean}
         */

    }, {
        key: 'isValid',
        value: function isValid(ahv13) {
            var ahvArray = this._preProcessArray(ahv13);
            var check = ahvArray.shift();
            var checkSum = this._calculateCheckSum(ahvArray);
            return this._calculateCheckSum(ahvArray) === check;
        }
    }]);

    return ValidatorAHV13;
}();

module.exports = ValidatorAHV13;
//# sourceMappingURL=index.js.map
