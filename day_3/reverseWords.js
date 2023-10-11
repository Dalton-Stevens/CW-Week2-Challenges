const reverseWords = (str) => {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
};

console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
console.log(reverseWords("apple"));
console.log(reverseWords("a b c d"));
console.log(reverseWords("double  spaced  words"));
