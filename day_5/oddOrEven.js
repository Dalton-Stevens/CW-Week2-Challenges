const oddOrEven = (arr) => {
  let sum = arr.reduce((a, b) => a + b, 0);

  return sum % 2 === 0 ? "even" : "odd";
};

console.log(oddOrEven([0, 1, 5]));
console.log(oddOrEven([0, -1, -5]));
console.log(oddOrEven([0, 1, 2]));
console.log(oddOrEven([]));
