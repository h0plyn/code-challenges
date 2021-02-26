// Create a function which takes a parameter n and returns a function such that it,
// when called n times, returns the string "edabit".

const lambdaDepth = (k) => {
  const depth = () => {
    if (k === 0) return "edabit";
    k--;
    return depth;
  };

  return depth();
};
