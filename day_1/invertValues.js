const invert = (array) => {
  return array.map((num) => num * -1);
};

console.log(invert([1, 2, 3, 4, 5]));
console.log(invert([1, -2, 3, -4, 5]));
console.log(invert([]));
