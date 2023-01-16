const fibonacci = (number) => {
  if (number < 3) {
    return 1;
  }

  let fibs = [1, 1];
  for (let i = 2; i < number; i += 1) {
    fibs = [fibs[1], fibs[0] + fibs[1]];
    // fibs.push(fibs[0] + fibs[1]);
    // fibs.shift();
  }
  return fibs[1];
}


console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050