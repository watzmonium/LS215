// A distinct string is a string that is present only once in an array.​
// Given an array of strings, arr, and an integer, k, return the kth distinct string present 
// in arr. If there are fewer than k distinct strings, return an empty string "".
// ​Note that the result string is the one encountered earliest in the array.

// Example

// keep the number of times matched

// kee
// iterate through the array, and check if the array has more than one occurance of that string
// make a count method, where i slice at index of string + 1 and if i find the string, return true
// if so, skip it
// else, if times matched === k, return that string

// return '' at the end

const distinctString = (arr, k) => {
  let timesMatched = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let copyArray = arr.slice();
    copyArray.splice(i, 1);
    if (!isDuplicate(arr[i], copyArray)) {
      timesMatched += 1;
      if (timesMatched === k) {
        return arr[i];
      }
    }
  }
  return '';
};

const isDuplicate = (letter, array) => {
  return array.some(entry => entry === letter);
};

const notDuplicate = (str, array) => {
  let matchRegex = new RegExp(`${str}`, 'ig');
  let arrWord = array.join('');
  let matches = arrWord.match(matchRegex);
  return matches.length < 2;
};

console.log(distinctString(["d","b","c","b","c","a"], 2) === 'a'); // "a"
console.log(distinctString(["d","b","c","b","c","a"], 1) === 'd');
console.log(distinctString(["dad","bad","cam","bad","cam","apple"], 2))// === 'apple');
console.log(distinctString(["d","b","c","b","c","a"], -1) === '');
console.log(distinctString(["d","b","c","b","c","a"], 0) === '');
console.log(distinctString([], 1) === '');


// questions;
//  what should we do if given an empty array?
//  should we consider other input types?
//  negative index numbers? index outside of bounds?
//  all characters valid?
//  data types other than string in the array?
//  sparse array?
//  less than or more than 2 args?