// Recursively return a string n about of times

const repetition = (s, n) => {
  debugger
  if (n === 0) return '';

  return s + repetition(s, n - 1);
};

console.log(repetition('hey', 3));
