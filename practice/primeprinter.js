// Write a function, primeNumberPrinter, that prints all prime numbers present as substrings in a given string.
// should i assume any character can be in the string?
// what should i do with an empty string?
// should i treat periods as floating point numbers?
// should i always expect 1 arg?
// should i always expect a string?
// what should i do if there's a number greater than max safe int?
// should i treat a - as a negative number or ignore it?

// data structures
// split the string into an array i can iterate over to determine what is prime and what is not

// algorithm
// replace every non numeric character with '*' and split it on the stars
// iterate over the array of numbers and nothings with filter
//   filter by a helper method that determines if a number is prime
//      prime is if a number is less than 2, it's not prime
//      if a number is evenly divisible by a number up to its sqrt, and not equal to itself its not prime
// return that filtration

const primeNumberPrinter = (string) => {
  let numbRegex = /\d+/g;

  let numbers = string.match(numbRegex) || [];
  
  return numbers.map(number => Number(number))
                .filter(number => isPrime(number));
};

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let max = Math.ceil(Math.sqrt(number));

  for (let i = 2; i <= max; i += 1) {
    if (number % i === 0 && number !== i) {
      return false;
    }
  }
  return true;
}

console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter("a4bc-2k13d")); // [2, 13]
console.log(primeNumberPrinter("a4ba121dc2k13d")); // [2, 13]
console.log(primeNumberPrinter("a4bc2k1.3d")); // [2, 3]
console.log(primeNumberPrinter("a44bc2k1231.3451d")); // [2, 3]
console.log(primeNumberPrinter("")); // []
console.log(primeNumberPrinter("aadsd")); // []
