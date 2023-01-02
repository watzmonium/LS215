// must be only 1 @
// split on @ -> reject if size > 2
// local can only be alphanumeric
// domain must have 1 period and only a-z/i

// function isValidEmail(email) {
//   let emailParts = email.split('@');
//   if (emailParts.length !== 2) {
//     return false;
//   }

//   let local = emailParts[0];
//   let domain = emailParts[1];

//   if (validLocal(local) && validDomain(domain)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const validLocal = name => {
//   const regexp = /[^a-z0-9]/gi;
//   return name === name.replace(regexp, '!');
// };

// const validDomain = domain => {
//   const regexp = /[^a-z]/gi;
//   let parts = domain.split('.');

//   if (parts.length < 2 || !noEmpty(parts)) {
//     return false;
//   }

//   return parts.every(part => part === part.replace(regexp, '!'));
// };

// const noEmpty = parts => {
//   return parts.every(part => part !== '');
// };

const isValidEmail = email => {
  return (/^[a-z0-9]+@([a-z]+\.)+[a-z]+$/gi).test(email);
}

console.log(isValidEmail('Foo@baz.com.ph') === true);          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph') === true);       // returns true
console.log(isValidEmail('foo@baz.com') === true);             // returns true
console.log(isValidEmail('foo@baz.ph') === true);              // returns true
console.log(isValidEmail('HELLO123@baz') === false);            // returns false
console.log(isValidEmail('foo.bar@baz.to') === false);          // returns false
console.log(isValidEmail('foo@baz.') === false);                // returns false
console.log(isValidEmail('foo_bat@baz') === false);             // returns false
console.log(isValidEmail('foo@bar.a12') === false);             // returns false
console.log(isValidEmail('foo_bar@baz.com') === false);         // returns false
console.log(isValidEmail('foo@bar.....com') === false);         // returns false
