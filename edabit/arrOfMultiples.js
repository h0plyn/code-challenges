function arrayOfMultiples(num, length) {
  let multiples = [];
  for (let i = 1; i <= length; i++) {
    multiples.push(i * num);
  }
  return multiples;
}
