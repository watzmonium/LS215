// A featured number (something unique to this exercise) is an odd number that is a multiple of 7,
//  with all of its digits occurring exactly once each. For example, 49 is a featured number,
//   but 98 is not (it is not odd), 97 is not (it is not a multiple of 7), and 133 is not 
//   (the digit 3 appears twice).

// Write a function that takes an integer as an argument and returns the next featured number 
// greater than the integer. Issue an error message if there is no next featured number.

// problem
// given a number, find the next 'featured' number
// a featured number is evenly divisible by 7 and does not have any digits that occur more than once

// NOTE: The largest possible featured number is 9876543201.

// Examples:

// algorithm
// from the starting number, add 1 until a number is a multiple of 7
// check if it's a featured nummber and return it if it is
// otherwise count up by 7s until a featured number up to the max number
// if it's found, return it,
// if you get through all of them without finding it, return error message

// featured checks if 1) it's even, and 2, no digits repeat
// check repeating by checking if an array with the number spliced has the digit

const featured = (number) => {
  const max = 9876543201;

  let currentFeature;
  for (let i = (number + 1); i < (i + 7); i += 1) {
    if (i % 7 === 0) {
      if (featuredNum(i)) {
        return i;
      } else {
        currentFeature = i;
        break;
      }
    }
  }

  while (currentFeature < max) {
    currentFeature += 7;
    if (featuredNum(currentFeature)) {
      return currentFeature;
    }
  }
  return 'no such number';
};

const featuredNum = (number) => {
  return number % 2 !== 0 && noRepeats(number);
};

const noRepeats = (number) => {
  let numberArray = String(number).split('');
  for (let i = 0; i < numberArray.length; i += 1) {
    let tempArray = numberArray.slice();
    tempArray.splice(i, 1);
    if (tempArray.includes(numberArray[i])) {
      return false;
    }
  };
  return true;
};

console.log(featured(7) === 21);
console.log(featured(20) === 21);
console.log(featured(0) === 7);
console.log(featured(21) === 35);
console.log(featured(100) === 105);
console.log(featured(-1) === 7);
console.log(featured(-14) === -7);
console.log(featured(9876543201) === 'no such number');
console.log(featured(997) === 1029);          // 1029
console.log(featured(1029) === 1043);         // 1043
console.log(featured(999999) === 1023547);       // 1023547
console.log(featured(999999987) === 1023456987);    // 1023456987
console.log(featured(9876543186) === 9876543201);   // 9876543201
console.log(featured(9876543200) === 9876543201);   // 9876543201

