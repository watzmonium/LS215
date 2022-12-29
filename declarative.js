let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filter can take a callback function as an argument for each element
// if we write {object => isOddNumber(object)}, we're realy just writing a redundant callback
let oddNumbers = array.filter(isOddNumber);

console.log(oddNumbers);

function isOddNumber(number) {
  return number % 2 === 1;
}