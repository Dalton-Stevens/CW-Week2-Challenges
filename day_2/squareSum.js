const squareSum = (arr) => {
  let square = arr.reduce((acc, cur) => {
    return acc + cur ** 2;
  }, 0);

  return square;
};

console.log(squareSum([1, 2]));
console.log(squareSum([0, 3, 4, 5]));
console.log(squareSum([]));
