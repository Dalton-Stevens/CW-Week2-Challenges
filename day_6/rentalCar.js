const rentalCarCost = (days) => {
  return days >= 7
    ? days * 40 - 50
    : days >= 3 && days < 7
    ? days * 40 - 20
    : days * 40;
};

console.log(rentalCarCost(3));
console.log(rentalCarCost(4));
console.log(rentalCarCost(5));
console.log(rentalCarCost(6));
