const myFilter = (array, callback) => {
  let filteredArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) {
      filteredArray.push(array[i]);
    }
  }
  return filteredArray;
};

let someArr = [1, 2, 3, 4, 5];
let evenCallback = data => data % 2 === 0;

let filteredArray = myFilter(someArr, evenCallback);

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

let result = myFilter([{ a: 3, b: 4,  c: 5 },
                        { a: 5, b: 12, c: 13 },
                        { a: 1, b: 2,  c: 3 },], isPythagoreanTriple);

                        
console.log(result);