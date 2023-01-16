const isUppercase1 = (test) => {
  for (let i = 0; i < test.length; i += 1) {
    if (test.charCodeAt(i) > 96 && test.charCodeAt(i) < 123) {
      return false;
    }
  }
  return true;
};

const isUppercase = (test) => {
  return !test.match(/[a-z]/);
}

console.log(isUppercase('t') === false);               // false
console.log(isUppercase('Four Score') === false);   
console.log(isUppercase('FOUR SCORE') === true);      // true 
console.log(isUppercase('4SCORE!') === true);         // true
console.log(isUppercase('') === true);   