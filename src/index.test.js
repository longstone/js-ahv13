const assert = require('assert');
const AHV13 = require('./index');
describe('calculate the checksum', () => {
    it('should calculate the checksum for the example case 7569217076985', () => {
        const ahv13validator = new AHV13();
        // const ahv13number = '7569217076985';
        const ahv12number = '756921707698';
        assert.equal(ahv13validator.checkSum(ahv12number), 5);
    });

    it('should calculate the checksum for the example case 756.3047.5009.62', () => {
        const ahv13validator = new AHV13();
        const ahv12number = '756.3047.5009.6';
        assert.equal(ahv13validator.checkSum(ahv12number), 2);
    });

});
describe('check ahv13 validity',  ()  => {

    it('should return that "756.9217.0769.85" is valid',  () =>  {
        const ahv13validator = new AHV13();
        const ahv13number = '756.9217.0769.85';
        const expected = true;
        const actual =ahv13validator.isValid(ahv13number);
        assert.equal(actual, expected);
    });
    it('should return that "756.3047.5009.62" is valid',  () =>  {
        const ahv13validator = new AHV13();
        const ahv13number = '756.3047.5009.62';
        const expected = true;
        const actual =ahv13validator.isValid(ahv13number);
        assert.equal(actual, expected);
    });
    it('should return that "756.1234.5678.97" is valid',  () =>  {
        const ahv13validator = new AHV13();
        const ahv13number = '756.1234.5678.97';
        const expected = true;
        const actual =ahv13validator.isValid(ahv13number);
        assert.equal(actual, expected);
    });

    it('should return that the sample case is valid with or without dots',  () =>  {
        const ahv13validator = new AHV13();
        const ahv13numberDotted = '756.9217.0769.85';
        const ahv13number = '7569217076985';
        const expected = true;
        const actual =ahv13validator.isValid(ahv13number);
        const actualDotted =  ahv13validator.isValid(ahv13numberDotted);
        assert.equal(actual, expected);
        assert.equal(actualDotted, expected);
    });

    it('should fail if the sample  is invalid',  () =>  {
        const ahv13validator = new AHV13();
       const ahv13number = '756.9217.0769.83';
        const expected = false;
        const actual =ahv13validator.isValid(ahv13number);
        assert.equal(actual, expected);
    });

});