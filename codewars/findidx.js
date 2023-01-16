const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 5];

const arraysEqual = (array1, array2) => {
  for (let i = 0; i < array1.length; i += 1) {
    console.log(array2.indexOf(array1[i]));
  }
}

arraysEqual(arr1, arr2);