// O(n)t | O(k)s - where n is the number of characters in the string and k + 1 is the number of characters in the hashmap
const longest_substring_with_k_distinct = function (str, k) {
  let charMap = {};
  let longest = -Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < str.length; windowEnd += 1) {
    let rightChar = str[windowEnd];

    if (!(rightChar in charMap)) {
      // add to hashmap if not included
      charMap[rightChar] = 0;
    }
    charMap[rightChar] += 1; // increment frequency of char

    while (Object.keys(charMap).length > k) {
      // loop while  window is larger than k elements
      let leftChar = str[windowStart];
      charMap[leftChar] -= 1; // decrement starting character
      if (charMap[leftChar] === 0) delete charMap[leftChar]; // delete starting character from hashmap if freq is 0
      windowStart += 1; // slide the start of the window
    }
    longest = Math.max(longest, windowEnd - windowStart + 1); // update the longest window with < k distinct chars
  }
  return longest;
};
