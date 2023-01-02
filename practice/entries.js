let users = {
  frank: {height: 100, weight: 200},
  charlie: {height: 300, weight: 500},
};

// let userArray = Object.entries(users);
// userArray[0][1].height = 200;

// console.log(userArray);
// console.log(users);

// console.log(Object.fromEntries(userArray));
let userString = JSON.stringify(users);
console.log(userString);
console.log(typeof userString);
console.log(JSON.parse(userString));