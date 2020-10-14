// Given an array of women and an array of men, either:
// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return a array of pairs, with the first woman paired
// with the first man, second woman paired with the second man, etc

//Declarative
function zipIt(women, men) {
  if (men.length !== women.length) return `sizes don't match`;

  return women.map((el, i) => {
    return [el, men[i]];
  });
}

//Imperative
function zipIt(women, men) {
  if (women.length !== men.length) return `sizes don't match`;

  let pairs = [];

  for (let i = 0; i < women.length; i++) {
    let currentPair = [];
    let currentWoman = women[i];
    let currentMan = men[i];

    currentPair.push(currentWoman);
    currentPair.push(currentMan);

    pairs.push(currentPair);
  }

  return pairs;
}
