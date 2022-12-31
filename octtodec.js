const OCTAL = 8;

const octalToDecimal = numberString => {
  let decimals = numberString.split('').reverse().map((number, index) => Number(number) * OCTAL**index);
  return decimals.reduce((sum, number) => sum + number);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9