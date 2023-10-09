const getGrade = (s1, s2, s3) => {
  let score = (s1 + s2 + s3) / 3;

  if (score >= 90 && score <= 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else {
    return "F";
  }
};

console.log(getGrade(95, 90, 93));
console.log(getGrade(82, 85, 87));
console.log(getGrade(75, 70, 79));
console.log(getGrade(65, 70, 59));
console.log(getGrade(44, 55, 52));
