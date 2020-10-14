let multiDimArray = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];

const flatten = (accumulator, currentEl) => {
  return accumulator.concat(currentEl);
};

let flatArr = multiDimArray.reduce(flatten);

console.log(flatArr);
