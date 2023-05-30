# Number to Indonesian Words

A JavaScript/TypeScript library to convert numbers into Indonesian words.

## Installation

You can install the package using npm:

```bash
npm install @iyansr/angka-terbilang
```

## Usage

```js
import numberToWords from '@iyansr/angka-terbilang';

console.log(numberToWords(1)); // Output: satu
console.log(numberToWords(1000)); // Output: seribu
console.log(numberToWords(1234567)); // Output: satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh
```

## API

`numberToWords(number: number): string`
Converts the given number into Indonesian words.

- `number`: The number to convert.
- Returns: A string representing the Indonesian word equivalent of the number.

---