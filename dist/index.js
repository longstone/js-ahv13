class ValidatorAHV13 {

    constructor() {}

    _removeDots(ahv13) {
        return ahv13.split('.').join("");
    }

    /**
     * AHV Number in reversed order, without checksum
     * @param ahv12
     * @returns {number}
     * @private
     */
    calculateCheckSum(ahv12) {
        let totalChecksum = 0;
        for (let i = 0; i < ahv12.length; i++) {
            const number = ahv12[i];
            if (i % 2 === 0) {
                totalChecksum = totalChecksum + 13 * number;
            } else {
                totalChecksum = totalChecksum + number;
            }
        }
        return totalChecksum % 10;
    }

    /**
     * validates a AHV13 Number with or without dots in the form of '756.9217.0769.85'
     * @param ahv13
     * @returns {boolean}
     */
    isValid(ahv13) {
        const cleanedAHV13 = this._removeDots(ahv13);
        const ahvArray = cleanedAHV13.split('').reverse().map(number => parseInt(number));
        const check = ahvArray.shift();
        return this.calculateCheckSum(ahvArray) === check;
    }
}
module.exports = ValidatorAHV13;
//# sourceMappingURL=index.js.map
