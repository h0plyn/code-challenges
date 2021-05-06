// O(k) | O(1) - where k is the number of factors needed to calculate until we can return
function kthFactor(n: number, k: number): number {
  let factor: number = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) factor++;
    if (factor === k) return i;
  }

  return -1;
}
