// map to a new object with values doubled from myObject
function doubleObjectValues(object) {
  let objEntries = Object.entries(object);
  // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
  let objMapped = objEntries.map(([key, val]) => [key, val * 2]);
  // [ [ 'a', 2 ], [ 'b', 4 ], [ 'c', 6 ] ]

  return Object.fromEntries(objMapped);
}

console.log(doubleObjectValues({ a: 1, b: 2, c: 3 })); // { a: 2, b: 4, c: 6 }

// filter an object to select only values with even numbers
function keepEvenValues(object) {
  let objEntries = Object.entries(object);
  let objFiltered = objEntries.filter(([key, val]) => val % 2 === 0);

  return Object.fromEntries(objFiltered);
}

console.log(keepEvenValues({ a: 1, b: 2, c: 3 })); // { b: 2 }

// filter an object to select only values with even numbers
function keepEvenValues(object) {
  let objEntries = Object.entries(object);
  let objFiltered = objEntries.filter(([key, val]) => val % 2 === 0);

  return Object.fromEntries(objFiltered);
}

console.log(keepEvenValues({ a: 1, b: 2, c: 3 })); // { b: 2 }