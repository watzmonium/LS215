// given some weird list of numbers, return a list of 'complete numbers
// we assume the first set is 'full numbers' where single digit ints represent themselves
// and then the next sequential numbers represent the next highest values increasing

// possible separators are '-', ':', '..', ','

// separate ranges and work on each separately
// keep track of the highest number i've seen
// starting with the lowest number after the highest i've seen that ends with the start of the range
// continue adding until i get a number that ends with the end of the range

// iterate through each range
// for each range split the range on the splitters with the splitting numbers
// for each number in the split
// add numbers by one until the number satisfies the starting condition
// continue add to that max until a number satisfies the ending condition
// after each range, keep track of the max number (last number int the array)
//

const completeNumbers = (string) => {
  string = string.replaceAll(' ', '');
  let ranges = string.split(',');
  const splits = /\-|:|\.\./g;
  let completes = [];
  let max = 0;
  ranges.forEach((set) => {
    let sets = set.split(splits);
    sets.forEach((number, index) => {
      while (!String(max).endsWith(number)) {
        max += 1;
      }
      if (sets[index + 1]) {
        while (!String(max).endsWith(sets[index + 1])) {
          completes.push(max);
          max += 1;
        }
      } else {
        completes.push(max);
      }
    });
  });
  return completes;
};





console.log(completeNumbers('1, 3, 7, 2, 4, 1')) // [1, 3, 7, 12, 14, 21]
console.log(completeNumbers("1-3, 1-2")) // [1, 2, 3, 11, 12]
// console.log(completeNumbers("1:3, 1:2")) // [1, 2, 3, 11, 12]
// console.log(completeNumbers("1..3, 1..2")) // [1, 2, 3, 11, 12]
// console.log(completeNumbers("1:5:2")) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// console.log(completeNumbers("104-2")) // [104, 105, ... 112]
// console.log(completeNumbers("104-02")) // [104, 105... 202]
// console.log(completeNumbers("545, 64:11")) // [545, 564... 611]
// console.log(completeNumbers('')) // 


