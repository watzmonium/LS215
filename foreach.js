const array = [1, 2, 3, 4, 5];

// array.forEach((element, idx, array) => {
//   console.log(element, idx, array)
// });

const myForEach = (array, callback) => {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
};

const myCallback = (element, idx, array) => {
    console.log(element, idx, array)
  }

// myForEach(array, myCallback);

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3