# piano-utils

[![build status](https://travis-ci.com/kevinsqi/piano-utils.svg?branch=master)](https://travis-ci.com/kevinsqi/piano-utils/)

A set of functional utilities to help you build piano UI components in javascript. Extracted from [react-piano](https://github.com/kevinsqi/react-piano).

## Installation

Install with npm/yarn:

```
yarn add piano-utils
```

## Usage: `MidiNumbers`

Import it:

```js
import { MidiNumbers } from 'piano-utils';
```

Converting note names to midi numbers:

```js
MidiNumbers.fromNote('C#0'); // => 13
MidiNumbers.fromNote('C3'); // => 48
MidiNumbers.fromNote('Eb5'); // => 75
```

Getting attributes of a midi number:

```js
const attrs = MidiNumbers.getAttributes(51);

// {
//   note: 'Eb3',
//   pitchName: 'Eb',
//   octave: 3,
//   isAccidental: true,
//   midiNumber: 51,
// }
```

## Usage: `KeyboardShortcuts`

Import it:

```js
import { KeyboardShortcuts } from 'piano-utils';
```

Building an array of keyboard shortcuts mapping key names to midi numbers:

```js
const shortcuts = KeyboardShortcuts.create({
  firstNote: 48,
  lastNote: 60,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

// {
//   key: 'a',
//   midiNumber: 48,
// },
// {
//   key: 'w',
//   midiNumber: 49,
// },
// {
//   key: 's',
//   midiNumber: 50,
// },
// {
//   key: 'e',
//   midiNumber: 51,
// },
// {
//   key: 'd',
//   midiNumber: 52,
// },
```

## Developing

This library was built with [tsdx](https://github.com/palmerhq/tsdx).

Make changes and keep typescript compiling with:

```
yarn start
```

Run tests with:

```
yarn test
```
