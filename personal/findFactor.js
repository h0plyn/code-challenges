// Return the factor at the p-ith position for a given input n
// Needs to account forlarge inputs
function pthFactor(n, p) {
  const factors = [];

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) factors.push(i);
    if (factors.length === p) break;
  }
  return p > factors.length ? 0 : factors[p - 1];
}

console.log(pthFactor(90028983, 10));
