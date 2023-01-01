const substrings = string => {
  let subs = [];
  for (let i = 0; i < string.length; i += 1) {
    for (let j = i; j < string.length; j += 1) {
      subs.push(string.slice(i, j + 1));
    }
  }
  return subs;
}

const substrings2 = string => {
  let letters = string.split('')
  let subs = letters.map((letter, index) => {
    let tempLetters = letters.slice(index);
    return tempLetters.map((letter, index2) => tempLetters.slice(0, index2 + 1).join(''));
  });
  return subs.flat();
}

console.log(substrings2('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]