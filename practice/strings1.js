// let firstName = 'Marshal';
// let lastName = 'Banana';
// let fullName = `${firstName} ${lastName}`;
// // console.log(fullName);
// console.log(firstName.concat(' ', lastName));

let language = 'JavaScript';
let idx = language.indexOf('S');

// console.log(String.fromCharCode(language.charCodeAt(idx)));

// let lastIdx = language.lastIndexOf('a');
// console.log(lastIdx);
// console.log(language.substring(1, 4));
// console.log(language.substring(2, 4));

// console.log(language.slice());
// console.log(language.substring(2, -1));
// let a = 'a';
// let b = 'b';

// console.log(a > b);
// b = 'B';
// console.log(a > b);

let fact1 = 'Javascript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = `${fact1} and ${fact2[0].toLowerCase() + fact2.slice(1)}`;
// console.log(compoundSentence);

let pi = 22/7;
let piIdx = pi.toString().lastIndexOf('14');

// console.log(piIdx);

// error bexause it thinks this is a decimal point!
let boxNumber =(365).toString();

console.log(boxNumber);