function isAllUnique(string) {
  let letterCount = countLetters(string);
  return allLettersUnique(letterCount);
}

const countLetters = string => {
  return string.split('').reduce((letterObject, letter) => {
    letterObject[letter] = letterObject[letter] || 0;
    letterObject[letter] += 1;
    return letterObject;
  }, {});
}

const allLettersUnique = letterObject => {
  return Object.keys(letterObject).every(letter => letterObject[letter] === 1);
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true