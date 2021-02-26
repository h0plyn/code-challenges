// I would like for you to write me a function that when given a number (n) returns the n-th number in the Fibonacci Sequence.
// For example:
//    nthFibo(4) == 2
// Because 2 is the 4th number in the Fibonacci Sequence.

function nthFibo(n) {
  if (n < 2) {
    return 0;
  } else if (n === 2) {
    return 1;
  }

  return nthFibo(n - 1) + nthFibo(n - 2);
}
