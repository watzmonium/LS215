const leadingSubstrings = string => {
  let chars = string.split('');
  return chars.map((letter, index) => chars.slice(0, index + 1).join(''));
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]