// Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

function peelLayerOff(arr) {
  arr.pop();
  arr.shift();
  arr.forEach((el) => {
    el.pop();
    el.shift();
  });

  return arr;
}
