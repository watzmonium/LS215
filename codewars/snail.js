// Given an n x n array, return the array elements arranged from outermost 
// elements to the middle element, traveling clockwise.

// problem
// given a 2d array - will it always be 2d?
// spiral clockwise through the array until you have hit a wall or 'seen' number and add numbers
// to an array in that order

// object whose keys represent rows and whose values represent columns, i can store the 'seen'
// values

// i will add each number to an array as i go

// algorithm
//
// iterate array.length number of times
// while (flatArray.length < array.length) 
// go row+, column+, row-, column- UNTIL either === row.length -1 || seen[row] = column
// while (seen || length)
//  push to the array
//  increment the variable
// have a row and column variable set to 0, 0
// start increasing row until row length is met
// then add to column,

const snail = (array) => {
  let copy = JSON.stringify(array);
  copy = JSON.parse(copy);
  let flatArray = []
  while (copy.length > 0) {
    flatArray.push(copy.shift());
    copy.forEach(sub => flatArray.push(sub.pop()));
    let reverse = copy.pop() || [];
    reverse.reverse();
    flatArray.push(reverse);
    for (let i = copy.length - 1; i > 0; i -= 1) {
      flatArray.push(copy[i].shift());
    }
  }
  return flatArray.flat().filter(number => number !== undefined);
};

let array = [[1,2,3],
         [4,5,6],
         [7,8,9]];

console.log(snail(array)) // => [1,2,3,6,9,8,7,4,5]

let array2 = [[1, 2, 3, 1],
              [4, 5, 6, 4],
              [7, 8, 9, 7],
              [7, 8, 9, 7]];

console.log(snail(array2)) // [1,2,3,1,4,7,7,9,8,7,7,4,5,6,9,8]

// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]))// [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]))//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]);
