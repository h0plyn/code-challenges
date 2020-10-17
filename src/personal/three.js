// Let a function execute 3 times. After 3 executions, throw an error.

function three(callback) {
  let calls = 0;
  return function () {
    if (calls >= 3) {
      return `this is function has func 3 or more times`;
    } else {
      calls++;
      return callback();
    }
  };
}

function stan() {
  return `stan`;
}

let threecalls = three(stan);

console.log(threecalls());
console.log(threecalls());
console.log(threecalls());
console.log(threecalls());
console.log(threecalls());
