/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */

var countBalls = function (lowLimit, highLimit) {
  let boxes = new Array(highLimit + 1).fill(0);

  for (let i = lowLimit; i <= highLimit; i++) {
    let ballPosition = i
      .toString()
      .split('')
      .reduce((a, b) => Number(a) + Number(b), 0);

    boxes[ballPosition] += 1;
  }

  return Math.max(...boxes);
};
