// Write a function that takes a string and returns an object containing the following three properties:

// the percentage of characters in the string that are lowercase letters
// the percentage of characters that are uppercase letters
// the percentage of characters that are neither

const letterPercentages = (string) => {
  const lowerRegex = /[a-z]/g;
  const upperRegex = /[A-Z]/g;
  const neitherRegex = /[^a-z]/ig;

  let lower = lettersPercent(string, lowerRegex);
  let upper = lettersPercent(string, upperRegex);
  let neither = lettersPercent(string, neitherRegex);
  return {
    lowercase: lower,
    upppercase: upper,
    neither: neither,
  }
};

const lettersPercent = (string, regex) => {
  let matches = string.match(regex);
  let match = matches ? matches.length : 0;
  return (match / string.length * 100).toFixed(2);
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

