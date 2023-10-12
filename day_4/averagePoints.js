const betterThanAverage = (classPoints, yourPoints) => {
  let sum = classPoints.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  if (yourPoints > sum / classPoints.length) {
    return true;
  } else {
    return false;
  }
};

// const betterThanAverage = (classPoints, yourPoints) => {
//   return (
//     yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length
//   );
// };

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9));
