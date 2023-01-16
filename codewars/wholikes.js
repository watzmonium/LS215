// Implement the function which takes an array containing the names of people that like an item. 
// It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// cases:
// 0, 1, 2, 3, 3+(but this is like 3)

function likes(names) {
  switch (names.length) {
    case 0:
      console.log('no one likes this');
      break;
    case 1:
      console.log(`${names[0]} likes this`);
      break;
    case 2:
      console.log(`${names[0]} and ${names[1]} like this`);
      break;
    case 3:
      console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
      break
    default:
      console.log(`${names[0]}, ${names[1]} and ${names.length - 2} others like this`);
      break
  }
}