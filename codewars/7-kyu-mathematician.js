// You are writing a function that takes two sets of arguments of arbitrary length.
// The return value will be the sum of the values of all of the arguments.
// The function should contain at least 1 argument per set.

function calculate(...a) {
  let arg1 = Array.from(a).reduce((a, b) => a + b);

  return function (...b) {
    let arg2 = Array.from(b).reduce((a, b) => a + b);
    return arg1 + arg2;
  };
}
