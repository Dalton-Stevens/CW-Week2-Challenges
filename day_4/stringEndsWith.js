const descendingOrder = (n) => {
  let num = n
    .toString()
    .split("")
    .sort(function (a, b) {
      return b - a;
    })
    .join("");

  return +num;
};

console.log(descendingOrder(0));
console.log(descendingOrder(1));
console.log(descendingOrder(111));
console.log(descendingOrder(15));
console.log(descendingOrder(1021));
console.log(descendingOrder(123456789));
