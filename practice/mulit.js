let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];
let letters = names.map(name => name[0]);
// letters is [ "H", "G", "K", "H", "K", "K", "O" ]

let counts = letters.reduce((obj, letter) => {
  obj[letter] = obj[letter] || 0;  // set obj[letter] to 0 if it doesn't have a value
  obj[letter] += 1;
  return obj;
}, {});

// counts is { H: 2, G: 1, K: 3, O: 1 }

let letter = Object.keys(counts).reduce((lastLetter, currentLetter) => {
  if (counts[lastLetter] > counts[currentLetter]) {
    return lastLetter;
  } else {
    return currentLetter;
  }
});

// letter is "K"

// uses for reduce - object accumulation, iteration with a single return value/object

console.log(letter);