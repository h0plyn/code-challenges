/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// O(n)t | O(1)s - where n is the length of stones
// Constant space because the largest our set can grow is 26 * 2 (a-zA-Z)
var numJewelsInStones = function (jewels, stones) {
  let jSet = new Set(jewels);
  let result = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jSet.has(stones[i])) result += 1;
  }

  return result;
};
