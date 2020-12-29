// An iterative Fib search is O(n)t / O(1)s

const nthFib = (n) => {
  let fibs = [0, 1];
  let counter = 3;

  while (counter <= n) {
    let nextFib = fibs[0] + fibs[1];
    fibs[0] = fibs[1];
    fibs[1] = nextFib;
    counter++;
  }

  return n > 1 ? fibs[1] : fibs[0];
};
