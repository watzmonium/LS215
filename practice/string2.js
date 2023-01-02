let rlSync = require('readline-sync');

let name = rlSync.question('What is your name? ');

if (name[name.length - 1] === '!') {
  console.log(`HELLO ${name.slice(0, -1).toUpperCase()}! WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello, ${name}`);
}