const countSheep = (num) => {
  let sheepString = "";

  for (let i = 1; i <= num; i++) {
    sheepString += `${i} sheep...`;
  }

  return sheepString;
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
