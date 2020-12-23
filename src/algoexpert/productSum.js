function productSum(array, multiplier = 2) {
  let newArray = array;

  return newArray.reduce((a, b) => {
    if (Array.isArray(b)) {
      a += productSum(b, multiplier + 1) * multiplier;
    } else {
      a += b;
    }
    return a;
  }, 0);
}
