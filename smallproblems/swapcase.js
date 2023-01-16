const swapCase = (word) => {
  return word.split('')
             .map((letter) => {
               if (/[a-z]/.test(letter)) {
                return letter.toUpperCase();
               } else if (/[A-Z]/.test(letter)) {
                return letter.toLowerCase();
               } else {
                return letter;
               }
             })
             .join('');
}

console.log(swapCase('CamelCase') === "cAMELcASE");              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV') === "tONIGHT ON xyz-tv");      // "tONIGHT ON xyz-tv"