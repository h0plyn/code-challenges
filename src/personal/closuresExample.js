const runOnThird = (count = 0) => {
  return function () {
    count++;
    if (count === 3) {
      return `The count is 3`;
    }
  };
};

//Closure created here
let threeCalls = runOnThird();

console.log(threeCalls());
console.log(threeCalls());
console.log(threeCalls());
