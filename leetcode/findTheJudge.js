/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (N, trust) {
  let count = new Array(N + 1).fill(0); // initialize array of all the townspeople

  for (let i = 0; i < trust.length; i++) {
    // loop through trust arr to map the townspeoples trust
    let [person, personTheyTrust] = trust[i];
    count[person] -= 1; // if this person trusts anybody, they are not the judge and we decrement their value
    count[personTheyTrust] += 1; // increment the person they trust, this might be the judge
  }

  for (let i = 1; i < count.length; i += 1) {
    let citizen = count[i];
    if (citizen === N - 1) return i; // if anyone of the townspeople are trusted by everyone in the town, exluding themself, they are the judge
  }

  return -1; // no judge found
};
