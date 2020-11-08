// Given that
// f0 = '0'
// f1 = '01'
// f2 = '010' = f1 + f0
// f3 = '01001' = f2 + f1
// You will be given a number and your task is to return the nth fibonacci string

function solve(n) {
  if (n === 0) {
    return '0';
  } else if (n === 1) {
    return '01';
  }

  return solve(n - 1) + solve(n - 2);
}
