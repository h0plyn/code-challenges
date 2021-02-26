// Create a function runningAverage() that returns a callable function object.
// Update the series with each given value and calculate the current average.

// Global scope [runningAverage]
function runningAverage() {
  // runningAverage scope [accumulator, size, anon func, + global scope]
  let accumulator = 0;
  let size = 0;

  return function (num) {
    //anon function scope [num, runningAve scope, global scope]
    accumulator += num;
    size++;

    return Math.round((accumulator / size) * 100) / 100;
  };
}
