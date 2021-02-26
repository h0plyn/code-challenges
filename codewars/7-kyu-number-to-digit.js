function createArrayOfTiers(n) {
  return n
    .toString()
    .split("")
    .reduce((a, b, i) => {
      i === 0 ? a.push(b) : a.push(a[i - 1] + b);
      return a;
    }, []);
}
