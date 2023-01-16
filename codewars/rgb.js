// problem:

// given 3 integers, return the hexadecimal RGB code as a string
// will we always get ints?
// could we get negative numbers?
// any number greater than 255 should be set to 255?
// 
// 

// data structures => put all values into an array
//   map each value to a string using a helper function
//   return the joined string

// algorithm
// first, put all values into an array
// map the values to 0-255
//   if number < 0, if number > 255, else

// map the values using the helper function to hex
// return the joined string

// hex function
// divide the number by 16, that will give me my 10s digit, and then modulo 16 gives my my 1 digit
// then i map them with an array and return that string

const rgb = (r, g, b) => {
  let colors = [r, g, b];
  colors = colors.map(color => {
    if (color > 255) {
      return 255;
    } else if (color < 0) {
      return 0
    } else {
      return color;
    }
  });
  
  return colors.map(color => toHex(color))
               .join('');
};

const toHex = (number) => {
  const HEX_VALUES = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  let tens = HEX_VALUES[Math.floor(number / 16)];
  let ones = HEX_VALUES[Math.floor(number % 16)];
  return tens + ones;
};

console.log(rgb(255, 255, 255)) // returns FFFFFF
console.log(rgb(255, 255, 300)) // returns FFFFFF
console.log(rgb(0,0,0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3
console.log(rgb(-145, Infinity, -Infinity)) // returns 9400D3