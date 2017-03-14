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

    _preProcessArray(arr){
       return arr.split('.').join('').split('').reverse().map( number => parseInt(number));
    }
    /**
     * AHV Number without last number, like: ('756.9217.0769.85')
     * @param ahv12
     * @returns {number} for this case 5
     * @private
     */
    checkSum(ahvnumber){
     return this._calculateCheckSum(this._preProcessArray(ahvnumber));
    }

    /**
     * validates a AHV13 Number with or without dots in the form of '756.9217.0769.85'
     * @param ahv13
     * @returns {boolean}
     */
    isValid(ahv13) {
        const ahvArray = this._preProcessArray(ahv13);
        const check = ahvArray.shift();
        const checkSum = this._calculateCheckSum(ahvArray);
        return this._calculateCheckSum(ahvArray) === check;
    }
}
module.exports = ValidatorAHV13;