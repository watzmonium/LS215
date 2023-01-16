// Implement encoding and decoding for the rail fence cipher.

// The Rail Fence cipher is a form of transposition cipher that gets its name from the 
// way in which it's encoded. It was already used by the ancient Greeks.

// In the Rail Fence cipher, the message is written downwards on successive "rails" of an 
// imaginary fence, then moving up when we get to the bottom (like a zig-zag). Finally the message 
// is then read off in rows.

// For example, using three "rails" and the message "WE ARE DISCOVERED FLEE AT ONCE", the 
// cipherer writes out:

// W . . . E . . . C . . . R . . . L . . . T . . . E
// . E . R . D . S . O . E . E . F . E . A . O . C .
// . . A . . . I . . . V . . . D . . . E . . . N . .

//WECRLTEERDSOEEFEAOCAIVDEN

// ? . . . ? . . . ? . . . ? . . . ? . . . ? . . . ?
// . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? . ? .
// . . ? . . . ? . . . ? . . . ? . . . ? . . . ? . .

// ? . . . . . ?
// . ? . . . ? . ?
// . . ? . ? . . . ?
// . . . ? . . . . . ?

// ? . . . . . . . ?
// . ? . . . . . ? . ?
// . . ? . . . ? . . . ?
// . . . ? . ? . . . . . ?
// . . . . ? . . . . . . . ?

// 2 rails is 1 dot
// 3 rails is 3 dots
// 4 rails is 5 dots
// 5 rails is 7 dots

// 2 rails is every 2nd index
// 3 rails is every 4th
// 4 rails is every 6th
// 5 tails is every 8th

// top spacing for indecies is n -1 * 2

// every n - 1 * 2 indecies for top letters
// every n - 1 * 2

// 1 + ((rails - 2 * 2) is max is top and bot
// next rows is max - 2 then 1 + 2 each time alternating
// index - 1 + 2 * index - 1

// first colums is 0 - rails - 1 dots
// then it's 

// problem

// given a string of text
// assume a string?
// what should i print if an empty string?
// should i assume the function will always get 1 argument?
// should i ignore spaces in writing the cipher?
// what should i do with non A-Z characters? should it always be in uppercase?
// should i convert lower to uppercase?
// what do i do if it falls short?

// take a string of characters, convert it to uppercase
// print it so that it meets the rail fence cipher and that a rail fence cipher can be 
// decoded

// then it prints the encoded message

// store each string in an array => array of arrays 



// first sanatize the string to remove non A-Z, then upcase the string
// declare magic number as n - 1 * 2
// determine max = string.length
// then filter the string n number of times
// each filter takes out a different division of index
// 0th is the magic number spaces AND last is magic number spaces, each starting 1 index later
// in between numbers are magic number - 2 indecies apart

// for loop and if index === 0 or index === n - 1 print top, else change mid
// print first thing is row numebr of dots then start pattern
//  makeDotArrayEdge = (startingDots, letters, magic number)
    // add dots, add letter, pad
//  makeDotArrayMid = (startingDots, letters, num1, num2)
    // add dots, add letter, pad 1, letter, pad 2
// then print top row is letter, magic number dots repeating until max length is reached
// then letter, n - (index + 2), letter, 1 + (row index - 1) * 2 dots until max length is reached
//  add 
// then last row is same as first until max length is reached

// i = 0 => 4, 0
// i = 1 => 2, 2
// i = 2 => 0, 4


// increase the slot in the array unless you hit the bottom, then decrease the slot in the array
// [n-sub-arrays]

const railFence2 = (sentence, rails) => {
  const regex = /[A-Z]/ig;
  let letters = sentence.match(regex) || [];
  sentence = letters.join('').toUpperCase();
  let railArray = populateRailArray(rails);
  let bumper = 0;
  let increasing = false;
  sentence.split('').forEach(letter => {
    railArray[bumper].push(letter);
    if (bumper === 0) {
      increasing = !increasing;
    } else if (bumper === rails - 1) {
      increasing = !increasing
    }

    if (increasing) {
      bumper += 1;
    } else {
      bumper -= 1;
    }
  });

  return railArray.flat().join('');
};

const populateRailArray = (numberOfSubArrays) => {
  let array = [];
  for (let i = 0; i < numberOfSubArrays; i += 1) {
    array.push([]);
  }
  return array;
}

const railFence = (sentence, rails) => {
  const regex = /[A-Z]/ig;
  let letters = sentence.match(regex) || [];
  sentence = letters.join('').toUpperCase();
  let railArray = []

  for (let i = 0; i < rails; i += 1) {
    let firstSplitSpace = ((rails - 1 ) * 2) - (2 * i);
    let secondSplitSpace = ((rails - 1 ) * 2) - (2 * (rails - (i + 1)));
    railArray.push(filterIndexes(sentence.slice(i), firstSplitSpace, secondSplitSpace));
  }
  return railArray.flat().join('')
};

const filterIndexes = (sentence, spaces1, spaces2) => {
  let letters = [];
  let i = 0;
  letters.push(sentence[i])
  while (i < sentence.length) {
    if (spaces1 > 0) {
      i += spaces1;
      letters.push(sentence[i])
    }
    if (spaces2 > 0) {
      i += spaces2;
      letters.push(sentence[i])
    }
  }
  return letters;
};

console.log(railFence2("WE ARE DISCOVERED FLEE AT ONCE", 3));
// console.log(railFence("One rail, only one rail", 1));
// console.log(railFence('XOXOXOXOXOXOXOXOXO', 2));
// console.log(railFence('EXERCISES', 4));

// WECRLTEERDSOEEFEAOCAIVDEN
// WECRLTEERDSOEEFEAOCAIVDEN
// railFence("WE ARE DISCOVERED FLEE AT ONCE", 2);
// railFence("WE ARE DISCOVERED FLEE AT ONCE", 4);

// railFence("we are", 2);
// railFence("ABCDEFGH!?124", 3);
// railFence("");


function railCipher(encoded, rails) {
  let rows = Array(rails)
    .fill()
    .map(() => Array(encoded.length).fill());

  let encodedIdx = 0;
  let increment = (rails - 1) * 2;

  for (let i = 0; i < rows.length; i++) {
    for (let j = i; j < rows[i].length; j += increment) {
      if (encodedIdx >= encoded.length) break;

      rows[i][j] = encoded[encodedIdx];
      encodedIdx++;
    }
    rows[i] = rows[i].filter((el) => el);
    increment += increment === (rails - 1) * 2 ? -2 : 2;
  }

  let decoded = "";
  let idx = 0;
  let inc = -1;
  while (decoded.length !== encoded.length) {
    decoded += rows[idx][0];
    rows[idx].shift();
    if (idx === 0 || idx === rails - 1) {
      inc *= -1;
    }
    idx += inc;
  }
  return decoded;
}

// console.log(railCipher("WE ARE DISCOVERED FLEE AT ONCE", 3));
