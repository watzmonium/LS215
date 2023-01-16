// problem - determine if a word is spelled using only 1 of each set of letter blocks

// filter the string to remove any non A-Z character
// iterate over each entry in the string, if I have seen a character, check it against the object and its keys
//  iterate over the keys of the object and if they key is present in seen OR the value for that key in the object is present
// if it is a match, return false
// return true

const letterBlocks = {B:'O', X:'K', D:'Q', C:'P', N:'A', G:'T', R:'E', F:'S', J:'W', H:'U', V:'I', L:'Y', Z:'M'}

const isBlockWord = (string) => {
  const regex = /[A-Z]/g;
  let charArray = string.toUpperCase().match(regex) || [];
  let seen = [];
  let isBad = true;
  charArray.forEach(letter => {
    if (seen.includes(letter) || seen.includes(letterBlocks[letter]) || seen.includes(keyFromLetter(letter))) {
      isBad = false;
    }
    seen.push(letter);
  });
  return isBad;
};

const keyFromLetter = (letter) => {
  let letterKeys = Object.keys(letterBlocks);
  for (let i = 0; i < letterKeys.length; i += 1) {
    if (letterBlocks[letterKeys[i]] === letter) {
      return letterKeys[i];
    }
  }
  return letter;
}

const isBlockWord = (string) => {
  const regex = /[A-Z]/g;
  let charArray = string.toUpperCase().match(regex) || [];
  let seen = [];
  let isBad = true;
  charArray.forEach(letter => {
    if (seen.includes(letter) || seen.includes(...keyLet(letter)) ){
      isBad = false;
    }
    seen.push(letter);
  });
  return isBad;
};

const keyLet = letter => {
  let pairs = Object.entries(letterBlocks);
  for (let i = 0; i < pairs.length; i += 1) {
    if (pairs[i].includes(letter)) {
      return pairs[i];
    }
  }
  return false;
};

console.log(isBlockWord('BKD') === true);
console.log(isBlockWord('BOD') === false);
console.log(isBlockWord('') === true);
console.log(isBlockWord('BATCH') === true);      // true
console.log(isBlockWord('BUTCH') === false);      // false
console.log(isBlockWord('jest') === true);       // true
console.log(isBlockWord(' 41\n!') === true);
