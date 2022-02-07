# js-ahv13 [![Build Status](https://travis-ci.org/longstone/js-ahv13.svg?branch=master)](https://travis-ci.org/longstone/js-ahv13)
## about
Helps you to check ahv13 numbers (swiss social security numbers) for there validity. See also http://www.sozialversicherungsnummer.ch/aufbau-neu.htm for more information about the form.

## howto
The SSN can be passed with or without dots.
```
const ahv13validator = new AHV13();
const isValid = ahv13validator.isValid('756.9217.0769.85');`
```
## sample
add ahv13

`npm install --save ahv13-validator` or `yarn add ahv13-validator`
lets start
```
 /**
  * Created by longstone on 14.03.17.
  */
 
 const Validator13 = require('ahv13-validator');
 const ahv13 = new Validator13();
 
 
 console.log('5==',ahv13.checkSum('756.9217.0769.8'));
 console.log('true==',ahv13.isValid('756.9217.0769.85'));
 ```

## dev

This project uses grunt as runner.

```
npm ci
grunt build
grunt test
```
there is also a `grunt watch` to 



### github actions local

Pipeline local:

```
act
```
