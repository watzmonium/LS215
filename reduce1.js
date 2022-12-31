const myReduce = (array, callback, accumulator) => {
  let index = 0;
  if (accumulator === undefined) {
    accumulator = array[0];
    index = 1;
  }

  for (;index < array.length; index += 1) {
    accumulator = callback(accumulator, array[index]);
  }

  return accumulator
};
// friends - an array of objects
// where object field "books" is a list of favorite books
const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
const allbooks = myReduce(friends,
  (accumulator, currentValue) => [...accumulator, currentValue.books], []
);
// console.log(allbooks);

// [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]

let thing = (...friends[0].books);
console.log(thing);