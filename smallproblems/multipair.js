const multiplyAllPairs = (array1, array2) => {
  let products = [];
  array1.forEach(number => {
    array2.forEach(secondNumber => products.push(number * secondNumber));
  })
  return products.sort((a, b) => a - b);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16])