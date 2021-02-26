// Given a number, return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark.

function dashatize(num) {
  let numArr = Math.abs(num).toString().split("");
  let newArr = [];
  if (numArr.length === 1) return numArr[0];

  for (let i = 0; i < numArr.length; i++) {
    let prevNumOdd = numArr[i - 1] % 2 === 1;
    let currentNumOdd = numArr[i] % 2 === 1;

    if (currentNumOdd && i === 0) {
      newArr.push(`${numArr[i]}-`);
      continue;
    }

    if (currentNumOdd && prevNumOdd && i !== numArr.length - 1) {
      newArr.push(`${numArr[i]}-`);
      continue;
    }

    if (currentNumOdd && i !== numArr.length - 1 && i !== 0) {
      newArr.push(`-${numArr[i]}-`);
      continue;
    }

    if (currentNumOdd && i === numArr.length - 1 && !prevNumOdd) {
      newArr.push(`-${numArr[i]}`);
      continue;
    }

    newArr.push(numArr[i]);
  }

  return newArr.join("");
}
