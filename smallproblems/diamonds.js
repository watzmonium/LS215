// Write a function that displays a four-pointed diamond in an nxn grid, where n is an odd integer 
// supplied as an argument to the function. You may assume that the argument will always be an odd integer.

// Examples:

const diamond1 = (stars) => {
  let floor = Math.floor(stars / 2);
  drawTopPyramid(stars, 0);
  drawBottomPyramid(stars - 2, 1)
};

const drawTopPyramid = (stars, spaces) => {
  if (stars < 1) {
    return;
  }
  drawTopPyramid(stars - 2, spaces + 1);
  console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
};

const drawBottomPyramid = (stars, spaces) => {
  if (stars < 1) {
    return;
  }
  console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
  drawBottomPyramid(stars - 2, spaces + 1);
}

const diamond = (height) => {
  let floor = Math.floor(height / 2);
  let stars = 1;
  let spaces = floor;
  while (stars < height) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    spaces -= 1;
    stars += 2;
  }
  while (stars >= 1) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    spaces += 1;
    stars -= 2;
  }
}

diamond(9);
// logs
// *

// diamond(3);
// logs
//  *
// ***
//  *

// diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// Problem:
// a function takes an odd integer as an input, and logs that number of rows as an output
// the rows always start with 1 star and end with 1 star
// each row increases by 2 each time so that the total number of stars is represented by
// 1 + (2 * index) until n / 2 ceiling rows, then decreases by 2 again.
// there are also n stars in the longest row, and no spaces there
// the rest of the rows will have n - stars spaces

// Algorithm
// find the floor of n / 2
// set stars = 1
// while stars <= n
//   print n - stars spaces + stars
//   add 2 to stars
//   
// floor number of times
//   subtract 2 from stars
//   print n - stars spaces + stars