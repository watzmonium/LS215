const order = (hungerLevel, item) => {
  console.log(`I'm ${hungerLevel} and I could eat a ${item}`);
};

order('super hungry', 'burger');

const otherOrder = (thing) => console.log(thing);

otherOrder('hi');

const array = [1, 2, 3, 4, 5];

const callback = (someObject) => {console.log(someObject)};

const iterate = (array, callbackFunction) => {
  for (let i = 0; i < array.length; i += 1) {
    callbackFunction(array[i])
  }
}

iterate(array, callback);

function oddOrEven(array) {
  iterate(array, function (number) {
    if (number % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  });
}

oddOrEven(array);