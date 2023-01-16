const lightsOn = (number) => {
  if (number < 1 || number === Infinity || Number.isNaN(number)) {
    return [];
  }

  let lights = new Array(number).fill(false);
  
  for (let i = 0; i < number; i += 1) {
    for (let s = i; s < number; s += i + 1) {
      lights[s] = !lights[s];
    }
  }
  lights = lights.map((number, index) => {
    return number > 0 ? index + 1 : 0;
  });
  return lights.filter((number) => number > 0);
};

console.log(lightsOn(5));
console.log(lightsOn(100));