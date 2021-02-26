// Write a sum function which will work properly when invoked using either syntax below.
// sum(2,3);  // Outputs 5
// sum(2)(3); // Outputs 5

function sum(a, b) {
  return a >= 0 && b >= 0 ? a + b : (x) => a + x;
}
