const sum = posInt => {
  let sum = 0;
  let stringNumber = String(posInt);
  for (let i = 0; i < stringNumber.length; i += 1) {
    sum += parseInt(stringNumber[i], 10);
  }
  return sum;
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45)