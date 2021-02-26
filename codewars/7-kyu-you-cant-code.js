// Code as fast as you can!
// You need to make a constructor function with two methods
// (and only these two methods) to return and increment a counter,
// but the counter should not be directly accessible from outside the function.

let total = {
  total: 0,
};

function Counter() {
  let newObj = Object.create(total);

  newObj.check = function () {
    return this.total;
  };
  newObj.increment = function () {
    this.total++;
  };

  return newObj;
}
