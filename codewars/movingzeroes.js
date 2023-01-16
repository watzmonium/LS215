// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

// should the function always expect 1 argument? what should i do if i get more?
// should i always expect an array?
// what do i do if i get a sparse array?
// what should i do if i get an empty array?
// does it matter what other elements are in the array?
// do i modifiy the original array or can i make a copy?

// work with the same array

// iterate through the array and check if an element is 0
//    a for loop seems like a good way to do this so that I can control the index value as i iterate
// if it's a 0, splice it out, decrement the index, and and a 0 to the end
// return the original array

const moveZeros = (array) => {
  let zeroCount = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 0) {
      array.splice(i, 1);
      zeroCount += 1;
      i -= 1;
    }
  }

  for (let i = 0; i < zeroCount; i += 1) {
    array.push(0);
  }

  return array;
};

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZeros([false,1,0,undefined, undefined,0,undefined,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]

let testArray = [0, 1];
console.log(moveZeros(testArray));// [1, 0]
let sameArray = moveZeros(testArray);
console.log(testArray === sameArray);
console.log(moveZeros([]))  // []
