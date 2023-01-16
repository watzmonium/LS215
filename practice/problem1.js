// cleans up user-entered phone numbers to send as SMS messages
// characters besides digits should be ignored ( .-()) - all characters are valid?

// are all characters valid? should we filter out specific characters?
// should we always expect a string?
// what should we do if an empty string is fed?

// if # of digits < 10, bad
// if # of digits > 10 AND the first number is NOT 1, bad
// if # of digits = 11 AND first number is 1, trim 1
// if you get a bad number, return 10 0s

// clean up the string so it's just numbers
// check the number of numbers, and if it's 10, return that string
// if it's 11, check if the first number is a 1, and if so, return the string after index 0

const phoneCleaner = (rawNumber) => {
  const regex = /\d/g;
  let number = rawNumber.match(regex) || [];
  number = number.join('');

  if (number.length === 10) {
    return number;
  } else if (number.length === 11 && number.startsWith('1')) {
    return number.slice(1);
  } else {
    return '0000000000';
  }
};

console.log(phoneCleaner('234-555-6789') === '2345556789');
console.log(phoneCleaner('    aabd234-555-6789    ') === '2345556789');
console.log(phoneCleaner('2345556789') === '2345556789');
console.log(phoneCleaner('0000000000') === '0000000000');
console.log(phoneCleaner('1111111111') === '1111111111');
console.log(phoneCleaner('11111111111') === '1111111111');
console.log(phoneCleaner('234-?!.555-6#?789') === '2345556789');
console.log(phoneCleaner('234-?!.\n555-6#?789') === '2345556789');
console.log(phoneCleaner('1234-555-6789') === '2345556789');
console.log(phoneCleaner('2234-555-6789') === '0000000000');
console.log(phoneCleaner('4-555-6789') === '0000000000');
console.log(phoneCleaner('11134-555-6789') === '0000000000');
console.log(phoneCleaner('') === '0000000000');