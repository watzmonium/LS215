const vigenere = (plaintext, cipher) => {
  let cipherArray = generateCipherCodes(cipher);
  let regexp = /[A-Z]/ig;
  let shiftIndex = 0;

  return plaintext.split('')
                  .map(char => {
                    if (char.match(regexp)) {
                      let letter = caesar(char, cipherArray[shiftIndex]);
                      shiftIndex = shiftIndex === (cipherArray.length - 1) ? 0 : shiftIndex + 1;
                      return letter;
                    } else {
                      return char;
                    }
                  })
                  .join('');

};

const generateCipherCodes = (cipher) => {
  return cipher.toUpperCase()
               .split('')
               .map(letter => letter.charCodeAt() - 65);
};

const caesar = (letter, key) => {
  let code = letter.charCodeAt();
  let normalize = code < 97 ? 65 : 97;
  let newCode = ((code - normalize) + key) % 26;
  return String.fromCharCode(newCode + normalize);
};

console.log(vigenere('abc', 'a')); // abc
console.log(vigenere('abc', 'b')); // bcd
console.log(vigenere('abc', 'bcd')); // bdf
console.log(vigenere('ABC', 'bcd')); // BDF
console.log(vigenere('ABCABC', 'bcd')); // BDF
console.log(vigenere('ABCABC', 'bcde')); // BDF
console.log(vigenere('abc', 'BCD')); // bdf
console.log(vigenere('a?b! -c', 'bcd')); // b?d! -f
console.log(vigenere('abc', 'bbbccc')); // bcd
console.log(vigenere('abc', 'bc')); // bdd
console.log(vigenere('', 'bcd')); // ''