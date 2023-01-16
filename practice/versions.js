// Problem
// given two version numbers, determine which version comes earlier or later than the other
// a more recent version is greater than an older version when compared
// if a newer version is arg1, then the function should return 1
// if older is arg1, it returns -1
// if they are equal, it returns 0

// version numbers must only contain numbers and . - it returns null if other characters are found

// examples 

// data structures
// an array to compare index to index. if one string doesn't have an index, it should be treated as 0

// algorithm
// check if there are illegal characters
// separate version numbers and then compare 1 by 1, treating empty as 0. 
//    split the string on periods. compare the length of each array and set the length
//    of the smaller array to taht of the larger array. fill the array from that index with 0
//    
// if a number is ever greater than the other number in sequence, that is the greater version
//   iterate for each, and if number 1 is ever greater than number 2, return 1. if 2 > 1, return -1
// return 0 at the end of they are the same
function compareVersionsA(versionA, versionB) {
  let validChars = /^[0-9]+(\.[0-9]+)*$/;

  if (!validChars.test(versionA) || !validChars.test(versionB)) {
    return null;
  }

  let aParts = versionA.split('.').map(Number);
  let bParts = versionB.split('.').map(Number);
  let maxLength = Math.max(aParts.length, bParts.length);

  for (let i = 0; i < maxLength; i += 1) {
    let aValue = aParts[i] || 0;
    let bValue = bParts[i] || 0;

    if (aValue > bValue) {
      return 1;
    } else if (aValue < bValue) {
      return -1;
    }
  }

  return 0;
}

const compareVersions = (version1, version2) => {
  if (badInput(version1) || badInput(version2)) {
    return null;
  }

  let ver1Array = createNumberArray(version1);
  let ver2Array = createNumberArray(version2);
  
  if (ver1Array.length > ver2Array.length) {
    let length = ver2Array.length
    ver2Array.length = ver1Array.length;
    ver2Array.fill(0, length);
  } else {
    let length = ver1Array.length
    ver1Array.length = ver2Array.length;
    ver1Array.fill(0, length);
  }

  for (let i = 0; i < ver1Array.length; i += 1) {
    if (ver1Array[i] > ver2Array[i]) {
      return 1;
    } else if (ver1Array[i] < ver2Array[i]) {
      return -1
    }
  }

  return 0;
};

const badInput = (version) => {
  const badRegex = new RegExp(/^\d+(\.\d+)*$/, 'g');
  if (badRegex.test(version)) {
    return false;
  }
  return true;
};

const createNumberArray = (versionString) => {
  return versionString.split('.').map(number => {
    let testNum = parseInt(number, 10);
    if (isNaN(testNum)) {
      return 0;
    } else {
      return testNum;
    }
  });
};

console.log(compareVersions('1.2.1', '1.2.1.0') === 0);
console.log(compareVersions('1.2.1', '1.2.1') === 0);
console.log(compareVersions('3.1', '2.12') === 1);
console.log(compareVersions('3.1', '4.12') === -1);
console.log(compareVersions('3.1.23.3', '2.1') === 1);
console.log(compareVersions('3.1.2.3', '2.1') === 1);
console.log(compareVersions('1.a', '2.1') === null);
console.log(compareVersions('.1', '2.1') === null);
console.log(compareVersions('1.1.', '2.1') === null);
console.log(compareVersions('1..1', '2.1') === null);
console.log(compareVersions('', '2.1') === null);