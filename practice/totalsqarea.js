const totalArea1 = rectangleArray => {
  return rectangleArray.reduce((sum, subArray) => 
    sum + subArray.reduce((subSum, number) => subSum * number), 0);
};

const totalArea = rectangleArray => {
  let areas = rectangleArray.map(subArray => 
    subArray.reduce((sum, item) => sum * item));
  return areas.reduce((sum, item) => sum + item);
};

const totalSquareArea = shapeArray => {
  let squares = shapeArray.filter((subArray) => 
    subArray.every((item) => item === subArray[0]));
  return totalArea(squares)};

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 141