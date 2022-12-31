const mySome = (array, callback) => {
  array.forEach((item) => {
    if (callback(item)) {
      return true;
    }
  });
  return false;
};

const myEvery = (array, callback) => {
  array.forEach((item) => {
    if (!callback(item)) {
      return false;
    }
  });
  return true;
};

let isAString = value => typeof value === 'string';
console.log(myEvery(['a', 'a234', '1abc'], isAString));       // true