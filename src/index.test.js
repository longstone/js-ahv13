/**
 * Created by longstone on 13.03.17.
 */
const assert = require("assert");
const AHV13 = require('./index');


describe('check ahv13 validity',  ()  => {

    it('should return that the sample case is valid',  () =>  {
        const ahv13validator = new AHV13();
        const ahv13number = '756.9217.0769.85';
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