const staggeredCase = (word) => {
  let staggeredString = '';
  let caps = true;
  for (let i = 0; i < word.length; i += 1) {
    if (caps) {
      staggeredString += word[i].toUpperCase();
    } else {
      staggeredString += word[i].toLowerCase();
    }
    caps = word[i].match(/[^a-z]/i) ? caps : !caps;
  }
  return staggeredString
};

console.log(staggeredCase('I Love Launch School!') === "I lOvE lAuNcH sChOoL!");        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL CAPS') === "AlL cApS");                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers') === "IgNoRe 77 ThE 4444 nUmBeRs");   // "IgNoRe 77 ThE 4444 nUmBeRs"