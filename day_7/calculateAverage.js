const average = (arr) => {
  return arr.length >= 1 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
};

console.log(average([1, 1, 1]));
console.log(average([1, 2, 3]));
console.log(average([1, 2, 3, 4]));
console.log(average([]));
