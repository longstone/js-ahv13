# js-ahv13

## About

Helps you to check ahv13 numbers (swiss social security numbers) for
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
import { AHV13 } from 'ahv13-validator';

const ahv13validator = new AHV13();
const isValid = ahv13validator.isValid('756.9217.0769.85');

console.log('valid', isValid)

console.log('5==',ahv13.checkSum('756.9217.0769.8'));
console.log('true==',ahv13.isValid('756.9217.0769.85'));
```

## Contributing

If you want to improve one of these images, your will need the following software installed on your system:

- `node` (10 or higher) with `npm`

You can then install the dependencies by running `npm ci`.

### Test the code

Code can be tested using [Jest](https://jestjs.io/) by running `npm run test`.

You can use `npm run watch:test` to watch for files and run the test on every change.

### Build

Project can be transpiled from [TypeScript](https://www.typescriptlang.org/) to JavaScript by running `npm run build`.

You can use `npm run watch:build` to watch for files and build on every change.

### Build the documentation

Documentation can be build with [`TypeDoc`](https://typedoc.org/) by running
`npm run doc`.

You can use `npm run watch:doc` to watch for files and build the documentation on every change.

*Note: This mode will only detect changes to files watched by the
TypeScript compiler.
Changes to other files (`README.md`) will not cause a rebuild.*

### Publish the documenation

Documentation can be published on GitHub Pages by running
`npm run doc && npm run doc:publish`.


### Testing GitHub Actions locally

GitHub Actions pipeline can be run locally using [`act`](https://github.com/nektos/act).

Once installed just run `act` to run the pipeline locally.

## External links

Here are a few etra links documenting how swiss social security number are checked:

- [The AHV Number (in german, french or italian)](https://www.bsv.admin.ch/bsv/de/home/sozialversicherungen/ahv/grundlagen-gesetze/ahv-nummer.html)

## KUDOS

<a href="https://github.com/longstone/js-ahv13/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=longstone/js-ahv13" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
