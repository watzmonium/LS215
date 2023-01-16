// Given an array of integers, nums, return the third largest number in the array. 
// If the third largest number does not exist, return the greatest number.

// You are not allowed to sort the array.

// check if array length < 3 and return NaN if it doesn't exist
// save the max number first!
// look through the array, find the largest number then save it
//  => reduce the array, push to new array if the number isn't the max number
// then do that again, then return the largest number OR max

const thirdMax = (arr) => {
  if (arr.length < 1) {
    return NaN;
  }

  let absoluteMax = Math.max(...arr);
  let deletedArr = arr;

  for (let i = 0; i < 2; i += 1) {
    let max = Math.max(...deletedArr);
    deletedArr = deleteMax(deletedArr, max);
  }
  
  let finalMax = Math.max(...deletedArr);
  return finalMax === -Infinity ? absoluteMax : finalMax;
};

const deleteMax = (arr, findNumber) => {
  return arr.reduce((newArr, number) => {
    if (number !== findNumber) {
      newArr.push(number);
    }
    return newArr;
  }, [])
};

console.log(thirdMax([3, 2, 1])=== 1); // 1
console.log(thirdMax([33, 33, 1]) === 33); // 1
console.log(thirdMax([33, 33, 33]) === 33); // 1
console.log(thirdMax([1, 0, -1]) === -1); // 1
console.log(thirdMax([3, 2, 1, 4, 5, 6, 8]) === 5); // 1
console.log(thirdMax([3, 2, 4, 4, 5, 8, 8]) === 4); // 1
console.log(Number.isNaN(thirdMax([]))); // 1


// questions

// will i always get an array?
// will i always get numbers?
// is it okay if numbers are negative or zero?
// what about Infinity?
// if the array is sparse should i skip those entries?
// what if the array has less than 3 entries?
// what if there is a tie?
// what if we get too many/too few args?