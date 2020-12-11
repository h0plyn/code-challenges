// Recursively return a string n about of times

const repetition = (s, n) => {
  if (n === 0) return '';

  return s + repetition(s, n - 1);
};
