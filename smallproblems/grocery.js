const buyFruit = fruitArray => {
  return fruitArray.reduce((array, fruits) => {
    for (let i = 0; i < fruits[1]; i += 1) {
      array.push(fruits[0]);
    }
    return array;
  }, []);
}

const buyFruit1 = fruitArray => {
  return fruitArray.flatMap(([item, quantity]) => new Array(quantity).fill(item));
}
console.log(buyFruit1([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]