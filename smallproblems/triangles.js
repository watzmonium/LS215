const triangle = (s1, s2, s3) => {
  let angles = [s1, s2, s3];
  if (angles.some(angle => angle === 0)) {
    return 'invalid'
  }
  let max = Math.max(...angles);
  if ( max > (s1 + s2 + s3) - max ) {
    return 'invalid';
  }
  
  if (s1 === s2 || s2 === s3 || s1 === s3) {
    if (s1 === s2 && s2 === s3) {
      return 'equilateral'
    } else {
      return 'isosceles'
    }
  } else {
    return 'scalene'
  }
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"