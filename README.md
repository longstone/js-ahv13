# ahv13-validator

[![npm version](https://badge.fury.io/js/ahv13-validator.svg)](https://badge.fury.io/js/ahv13-validator) ![ci](https://github.com/longstone/js-ahv13/actions/workflows/ci.yml/badge.svg) ![release](https://github.com/longstone/js-ahv13/actions/workflows/release.yml/badge.svg)

## About

Helps you to check AHV13 numbers (Swiss social security numbers) for
their validity.
See also [this article (in german)](http://www.sozialversicherungsnummer.ch/aufbau-neu.htm)
for more information about the form.

## Installation

To install using `npm`:

```
npm install --save ahv13-validator
```

If you are using `yarn`:

```
yarn add ahv13-validator
```

## Usage

The SSN can be passed with or without dots.

```ts
import { AHV13 } from "ahv13-validator";

const ahv13validator = new AHV13();
const isValid = ahv13validator.isValid("756.9217.0769.85");

console.log("valid", isValid);

console.log("5==", ahv13validator.checkSum("756.9217.0769.8"));
console.log("true==", ahv13validator.isValid("756.9217.0769.85"));
```

## Contributing

If you want to contribute, you will need the following software installed on your system:

- `node` (20 or higher) with `npm`

You can then install the dependencies by running `npm ci`.

### Test the code

Code can be tested using [Vitest](https://vitest.dev/) by running `npm test`.

You can use `npm run test:watch` to watch for files and run the test on every change.

### Check the code

Run all local checks with:

```sh
npm run check
```

### Build

Project can be transpiled from [TypeScript](https://www.typescriptlang.org/) to JavaScript by running `npm run build`.

### Build the documentation

Documentation can be built with [`TypeDoc`](https://typedoc.org/) by running
`npm run doc`.

The generated documentation is written to `build/docs`.

### Testing GitHub Actions locally

GitHub Actions pipeline can be run locally using [`act`](https://github.com/nektos/act).

Once installed just run `act` to run the pipeline locally.

## External links

Here are a few extra links documenting how swiss social security number are checked:

- [The AHV Number (in german, french or italian)](https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ahv/grundlagen-gesetze/ahv-nummer.html)

## KUDOS

<a href="https://github.com/longstone/js-ahv13/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=longstone/js-ahv13" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
