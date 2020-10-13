// Given an array of women and an array of men, either:
// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return a array of pairs, with the first woman paired
// with the first man, second woman paired with the second man, etc

function zipIt(women, men) {
  if (men.length !== women.length) return `sizes don't match`;

  return women.map((el, i) => {
    return [el, men[i]];
  });
}
