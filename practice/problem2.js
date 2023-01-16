// from right to left, double the value of every second digit
// if that value is > 10, subtract 9 from the result
// i.e. 1111 -> 2121
//      8763 -> 7733

// then add thema all togeher
//        2121 -> 6
//        7733 => 20
//
// if the total ends in 0 then the number is valid.

// "2323 2005 7766 3554" == valid

// filter out non-numbers
// iterate through the string, and transform every other index starting from the right
//   split the string into an array of numbers, map them to a number
//   and if the index is odd, double the string and then if it's greater than 10, subtract 9
// reduce the numbers and return that

const checksum = (inputNumber) => {
  const regex = /\d/g;
  let numberArray = inputNumber.match(regex);
  if (!numberArray) {
    return false;
  }
  let mappedArray = reverseNumberAndMapToNumber(numberArray);
  return mappedArray.reduce((sum, number) => sum + number) % 10 === 0;
};

const reverseNumberAndMapToNumber = (stringNumberArray) => {
  return stringNumberArray.reverse().map((numberStr, index) => {
    let number = parseInt(numberStr, 10);
    if (index % 2 !== 0) {
      number *= 2;
      return number > 9 ? number - 9 : number;
    } else {
      return number;
    }
  });
}

const fixChecksum = (inputNumber) => {
  if (checksum(inputNumber)) {
    return inputNumber;
  }

  const regex = /\d/g;
  let numberArray = inputNumber.match(regex);
  if (!numberArray) {
    return '';
  }

  numberArray.push(0);
  let mappedArray = reverseNumberAndMapToNumber(numberArray);
  let remainder = mappedArray.reduce((sum, number) => sum + number) % 10;
  return `${inputNumber}${10 - remainder}`;
};

// console.log(checksum('1111') === false);

// console.log(checksum('8763') === true);
// console.log(checksum("2323 2005 7766 3554") === true);
// console.log(checksum('') === false);
// console.log(checksum('2323 2005 7766 3555') === false);
// console.log(checksum("2323ada\n    2005 7766 3554") === true);

console.log(fixChecksum('1111') === '11114');
console.log(fixChecksum('8763') === '8763');
console.log(fixChecksum('') === '');
console.log(fixChecksum('2323 2005 7766 355'));



