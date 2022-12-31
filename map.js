const myMap = (array, callback) => {
  let mappedArray = [];
  array.forEach(thing => mappedArray.push(callback(thing)));
  return mappedArray;
};

let numbers = [1, 2, 3, 4, 5];

const double = number => number * 2;

console.log(myMap(numbers, double));