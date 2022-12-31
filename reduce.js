const myReduce = (array, callback, accumulator) => {
  let index = 0;
  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }

  for (;index < array.length; index += 1) {
    accumulator = callback(accumulator, array[index]);
  }

  return accumulator
};

let numbers = [1, 2, 3, 4, 5];

const add = (accumulator, number) => accumulator + number;

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

         // 1
          // 49

console.log(myReduce(numbers, add));
console.log(myReduce([5, 12, 15, 1, 6], smallest));  
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));