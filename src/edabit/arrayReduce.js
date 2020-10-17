function calculateSum(txt) {
  return txt
    .split("")
    .map((char) => char.charCodeAt())
    .reduce((accum, currVal) => accum + currVal, 0);
}

function reverseString(txt) {
  return [...txt].reduce((a, b) => b + a, "");
}

console.log(calculateSum("lime"));

console.log(reverseString("hello"));
