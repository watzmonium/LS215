const rotateArray = (array) => {
  if (!Array.isArray(array)) {
    return;
  } else if (array.length === 0){
    return [];
  }

  return array.slice(1).concat(array[0]);
  // let newArray = array.map(data => data);
  // let first = newArray.shift();
  // newArray.push(first);
  // return newArray;
};

const rotateRightmostDigits = (number, rotation) => {
  let numberArray = String(number).split('');
  let last = numberArray.splice(-rotation, 1);
  return numberArray.concat(last).join('');
}

const maxRotation = (number) => {
  for (let i = 0; i < String(number).length; i += 1) {
    number = rotateRightmostDigits(number, -i);
  }
  return parseInt(number, 10);
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845