# js-ahv13
## about
Helps you to check ahv13 numbers (swiss social security numbers) for there validity. See also http://www.sozialversicherungsnummer.ch/aufbau-neu.htm for more information about the form.
## howto
The SSN can be passed with or without dots.
```
const ahv13validator = new AHV13();
const isValid = ahv13validator.isValid('756.9217.0769.85');`
```