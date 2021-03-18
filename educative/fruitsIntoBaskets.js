// O(n)t | O(1)s - where n is the number of characters in the input array
// The outer for loop runs for each index, the while loop process each idx only once
// There can only be 3 fruits stored in the hashmap
// This is a variation of Longest Substring with K Distinct Characters where K = 2
const fruits_into_baskets = function (fruits) {
  let fruitMap = {};
  let windowStart = 0;
  let largestAmt = 0;

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd += 1) {
    // extend sliding window size
    let rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitMap)) {
      fruitMap[rightFruit] = 0;
    }
    fruitMap[rightFruit] += 1;

    while (Object.keys(fruitMap).length > 2) {
      // shirnk window until there are two fruits in the hashmap
      let leftFruit = fruits[windowStart];
      fruitMap[leftFruit] -= 1;
      if (fruitMap[leftFruit] === 0) delete fruitMap[leftFruit];
      windowStart += 1; // shrink window
    }
    largestAmt = Math.max(largestAmt, windowEnd - windowStart + 1);
  }
  return largestAmt;
};
