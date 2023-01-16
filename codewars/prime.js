// given an integer input (pos, neg, 0) determine if a number is prime

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  let max = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= max; i += 1) {
    if (num % i === 0 && i !== num) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1) === false);
console.log(isPrime(2)) // === true);
console.log(isPrime(-1) === false);
console.log(isPrime(4) === false);
console.log(isPrime(100) === false);
console.log(isPrime(17) === true);
