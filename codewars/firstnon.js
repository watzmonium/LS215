// Write a function named first_non_repeating_letter that takes a string input, and 
// returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the 
// letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, 
// but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None 
// -- see sample tests.

// problem is given a string return the first character that does not repeat in the string
// if none is found, return empty
// any character regardless of case but return case of character
// 

// algorithm
// upcase the whole string as a copy
// iterate through each letter of the string
// check each letter's match output
// if the length of the match data === 1, return that letter
// at the end return an empty string

const firstNonRepeatingLetter = (string) => {
  for (let i = 0; i < string.length; i += 1) {
    let regexp = new RegExp(`${string[i]}`, 'ig')
    if (string.match(regexp).length === 1) {
      return string[i];
    }
  }
  return '';
};

console.log(firstNonRepeatingLetter('bat') === 'b')
console.log(firstNonRepeatingLetter('Bat') === 'B')
console.log(firstNonRepeatingLetter('Batb') === 'a')
console.log(firstNonRepeatingLetter('') === '')
console.log(firstNonRepeatingLetter('BB') === '')
console.log(firstNonRepeatingLetter('-batBat') === '-')