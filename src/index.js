class ValidatorAHV13 {

    constructor() {
    }

    _calculateCheckSum(ahv12) {
        let totalChecksum = 0;
        for (let i = 0; i < ahv12.length; i++) {
            const number = ahv12[i];
            if (i % 2 === 0) {
                totalChecksum = totalChecksum + 13 * number;
            } else {
                totalChecksum = totalChecksum + number;
            }
        }
        const nextTimesTen = Math.ceil(totalChecksum / 10) * 10;
        return nextTimesTen - totalChecksum;
    }

    /**
     * this will remove '.' and reverse the number
     * @param arr
     * @returns {*}
     * @private
     */
    _preProcessArray(arr) {
        return arr.split('.').join('').split('').reverse().map(number => parseInt(number));
    }

    /**
     * AHV Number without last number, like: ('756.9217.0769.8')
     * @param ahvNumber12
     * @returns {int} checksum for this case 5
     * @private
     */
    checkSum(ahvNumber12) {
        const parsedNumber = this._preProcessArray(ahvNumber12);
        return this._calculateCheckSum(parsedNumber);
    }

    /**
     * validates a AHV13 Number with or without dots in the form of '756.9217.0769.85'
     * @param ahv13
     * @returns {boolean}
     */
    isValid(ahv13) {
        const reversedSSNArray = this._preProcessArray(ahv13);

        // enforce length of 13
        if (reversedSSNArray.length !== 13) {
          return false;
        }

        // remove the first entry, as it is the checksum
        const checkSumSSN = reversedSSNArray.shift();
        const checkSumCalculated = this._calculateCheckSum(reversedSSNArray);
        return checkSumCalculated === checkSumSSN;
    }
}

module.exports = ValidatorAHV13;
