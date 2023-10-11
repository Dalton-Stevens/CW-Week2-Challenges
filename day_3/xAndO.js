const xAndO = (str) => {
  const lowercase = str.toLowerCase();

  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < lowercase.length; i++) {
    const char = lowercase.charAt(i);
    if (char === "x") {
      xCount++;
    } else if (char === "o") {
      oCount++;
    }
  }

  return xCount === oCount;
};

const XO = (str) => {
  return (
    str.toLowerCase().split("x").length === str.toLowerCase().split("o").length
  );
};

console.log(xAndO("ooxx"));
console.log(xAndO("xooxx"));
console.log(xAndO("ooxXm"));
console.log(xAndO("zpzpzpp"));
console.log(xAndO("zzoo"));

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));
console.log(XO("zzoo"));
