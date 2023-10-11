const isIsogram = (str) => {
  str = str.toLowerCase();

  const seenCharacters = {};

  for (let char of str) {
    if (seenCharacters[char]) {
      return false;
    }

    seenCharacters[char] = true;
  }

  return true;
};

// const isIsogramTwo = (str) => {
//   return new Set(str.toLowerCase()).size === str.length;
// };

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("isogram"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));
console.log(isIsogram("isIsogram"));
console.log(isIsogram(""));
