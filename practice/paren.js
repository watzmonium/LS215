const isBalanced = string => {
  let sum = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      sum += 1;
    } else if (string[i] === ')') {
      sum -= 1;
    }

    if (sum < 0) {
      return false;
    }
  }
  return sum === 0;
}

console.log(isBalanced('What (is) this?') === true);        // true
console.log(isBalanced('What is) this?') === false);         // false
console.log(isBalanced('What (is this?') === false);         // false
console.log(isBalanced('((What) (is this))?') === true);    // true
console.log(isBalanced('((What)) (is this))?') === false);   // false
console.log(isBalanced('Hey!') === true);                   // true
console.log(isBalanced(')Hey!(') === false);                 // false
console.log(isBalanced('What ((is))) up(') === false);       // false