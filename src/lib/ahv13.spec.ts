import { AHV13 } from './ahv13';

const ahv13validator = new AHV13();

describe('calculate the checksum', () => {
  it('should calculate the checksum for the example case 7569217076985', () => {
    const ahv12number = '756921707698';
    expect(ahv13validator.checkSum(ahv12number)).toBe(5);
  });

  it('should calculate the checksum for the example case 756.3047.5009.62', () => {
    const ahv12number = '756.3047.5009.6';
    expect(ahv13validator.checkSum(ahv12number)).toBe(2);
  });
});
describe('check ahv13 validity', () => {
  it('should return that "756.9217.0769.85" is valid', () => {
    const ahv13number = '756.9217.0769.85';
    const expected = true;
    const actual = ahv13validator.isValid(ahv13number);
    expect(actual).toBe(expected);
  });
  it('should return that "756.3047.5009.62" is valid', () => {
    const ahv13number = '756.3047.5009.62';
    const expected = true;
    const actual = ahv13validator.isValid(ahv13number);
    expect(actual).toBe(expected);
  });
  it('should return that "756.1234.5678.97" is valid', () => {
    const ahv13number = '756.1234.5678.97';
    const expected = true;
    const actual = ahv13validator.isValid(ahv13number);
    expect(actual).toBe(expected);
  });
  it('should return that "756.9217.0769.83" is invalid', () => {
    const ahv13number = '756.9217.0769.83';
    const expected = false;
    const actual = ahv13validator.isValid(ahv13number);
    expect(actual).toBe(expected);
  });

  it('should return that the sample case is valid with or without dots', () => {
    const ahv13numberDotted = '756.9217.0769.85';
    const ahv13number = '7569217076985';
    const expected = true;
    const actual = ahv13validator.isValid(ahv13number);
    const actualDotted = ahv13validator.isValid(ahv13numberDotted);
    expect(actual).toBe(expected);
    expect(actualDotted).toBe(expected);
  });

  it('should fail if the sample  is invalid', () => {
    const ahv13number = '756.9217.0769.83';
    const expected = false;
    const actual = ahv13validator.isValid(ahv13number);
    expect(actual).toBe(expected);
  });

  it('should fail with value "123" as it is invalid', () => {
    const ahv13number = '123';
    const expected = false;
    const actual = ahv13validator.isValid(ahv13number);
    expect(actual).toBe(expected);
  });

  it('should fail with value "1.2.3" as it is invalid', () => {
    const ahv13number = '1.2.3';
    const expected = false;
    const actual = ahv13validator.isValid(ahv13number);
    expect(actual).toBe(expected);
  });
});
