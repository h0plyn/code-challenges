// Given a non-negative integer num, return the number of steps to reduce it to zero.
// If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

const numberOfSteps = (num) => {
  if (num === 0) return 0;

  return num % 2 === 0
    ? 1 + numberOfSteps(num / 2)
    : 1 + numberOfSteps(num - 1);
};
