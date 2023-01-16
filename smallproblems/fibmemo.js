'use strict';
let seen = {}

const fibonacci = (number) => {
  if (seen[number]) {
    return seen[number];
  }

  if (number < 3) {
    return 1;
  }

  seen[number] = fibonacci(number - 1) + fibonacci(number - 2);
  return seen[number];
};

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
console.log(fibonacci(30));      // 6765