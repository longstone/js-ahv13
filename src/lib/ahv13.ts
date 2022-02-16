/**
 * Provides a set of methods to compute swiss social security numbers' checksums
 * and check their validity.
 */
export class AHV13 {
  /**
   * Compute the checksum for a given social security number.
   *
   * @param ahv12 - Social security number **without its checksum** (aka AHV12)
   * @returns The social security number's checksum
   */
  private calculateCheckSum(ahv12: number[]) {
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
   * Remove the '.' characters and reverse the social security number
   *
   * @param arr - Social security number
   * @returns The social security number **reversed and in the form of an
   * array**
   */
  private preProcessArray(arr: string): number[] {
    return arr
      .split('.')
      .join('')
      .split('')
      .reverse()
      .map((number) => parseInt(number));
  }

  /**
   * Parse the social security number and return its checksum
   *
   * # Example
   *
   * ```ts
   * const validator = new AHV13();
   * const checksum = validator.checkSum('756.9217.0769.8');
   *
   * console.log(checksum); // 5
   * ```
   *
   * @param ahvNumber12 - Social security number **without its checksum**
   * @returns The social security number's checksum
   */
  checkSum(ahvNumber12: string): number {
    const parsedNumber = this.preProcessArray(ahvNumber12);
    return this.calculateCheckSum(parsedNumber);
  }

  /**
   * Validate a AHV13 Number with or without dots in the form of '756.9217.0769.85'
   *
   * # Example
   *
   * ```ts
   * const validator = new AHV13();
   *
   * console.log(validator.isValid("756.9217.0769.85")) // true
   * console.log(validator.isValid("756.9217.0769.82")) // false
   * ```
   *
   * @param ahv13 -  Social security number **with its checksum**
   * @returns `true` if the number is valid. `false` otherwise.
   */
  isValid(ahv13: string): boolean {
    const reversedSSNArray = this.preProcessArray(ahv13);

    // enforce length of 13
    if (reversedSSNArray.length !== 13) {
      return false;
    }

    // remove the first entry, as it is the checksum
    const checkSumSSN = reversedSSNArray.shift();
    const checkSumCalculated = this.calculateCheckSum(reversedSSNArray);
    return checkSumCalculated === checkSumSSN;
  }
}
