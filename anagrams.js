const anagram = (word, list) => {
  return list.filter(sortWord => areAnagrams(word, sortWord));
}

const areAnagrams = (word1, word2) => {
  return word1.split('').sort().join('') === word2.split('').sort().join('');
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]