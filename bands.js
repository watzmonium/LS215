const processBands = (bandData) => {
  return bandData.map(band => {
    let fixedName = removePeriods(band.name);
    fixedName = capitalizePhrase(fixedName);
    
    return {
      name: fixedName,
      country: 'Canada',
      active: band.active,
    };
  });
};

const removePeriods = word => {
  const regex = /\./g;
  return word.replaceAll(regex, '');
}

const capitalizePhrase = words => {
  return words.split(' ')
              .map(word => capitalize(word))
              .join(' ');
}

const capitalize = word => {
  let letters = word.split('');
  letters[0] = letters[0].toUpperCase();
  return letters.join('');
}

// all bands are from canada
// all names should be capitalized
// there shouldnt be dots in band names

let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

console.log(processBands(bands));
console.log(bands);
// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]