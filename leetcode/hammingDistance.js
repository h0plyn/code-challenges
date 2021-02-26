var hammingDistance = function (x, y) {
  const yBin = (y >>> 0).toString(2);
  const xBin = (x >>> 0).toString(2);
  let count = 0;
  console.log(yBin);
  console.log(xBin);

  for (let i = 0; i <= yBin.length; i++) {
    if (yBin[i] !== xBin[i]) {
      count++;
    }
  }

  if (yBin.length !== xBin.length) {
    let diff = Math.abs(yBin.length - xBin.length);
    return count - diff;
  }

  return count;
};

console.log(hammingDistance(4, 14));
