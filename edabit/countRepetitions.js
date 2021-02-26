// Given an array, create a function that returns an object detailing how many
// times each element was repeated. Sort the object by value in descending order.

const countRepetitions = (arr) => {
  let freq = {};

  arr.forEach((el) => {
    if (!freq[el]) {
      freq[el] = 1;
    } else {
      freq[el]++;
    }
  });

  return Object.fromEntries(Object.entries(freq).sort(([, a], [, b]) => b - a));
};
