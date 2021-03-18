// O(n)t | O(k)s - where n is the length of the string and k is the length of the longest substring
// Similar sliding window pattern to Longest Substring with K Distinct Characters
// const non_repeat_substring = function (str) {
//   let windowStart = 0;
//   let longest = -Infinity;
//   let charMap = {};

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd += 1) {
//     let currentChar = str[windowEnd];
//     // check map for current char
//     if (!(currentChar in charMap)) {
//       // add it if it is a new char
//       charMap[currentChar] = 0;
//     }
//     // increment the char
//     charMap[currentChar] += 1;

//     // if this char val is > 1, it is not unique
//     while (charMap[currentChar] > 1) {
//       let rightChar = str[windowStart]; // grab the end of the start of the window
//       charMap[rightChar] -= 1; //remove 1 letter from the current start of window
//       if (charMap[rightChar] === 0) delete charMap[rightChar]; // if that char doesnt exist in the window anymore, delete it
//       windowStart += 1; // slide the window from the start
//     }

//     longest = Math.max(longest, windowEnd - windowStart + 1); // check which is longer, the prev longest or new window
//   }

//   return longest;
// };

// Optimized Solution
function non_repeat_substring(str) {
  debugger;
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      // *This slides the start of the window to the end of the current distinct char substring, which starts a new window!
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    // insert the 'rightChar' into the map
    charIndexMap[rightChar] = windowEnd;
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(
  `Length of the longest substring: ${non_repeat_substring('aabccbb')}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring('abbbb')}`
);
console.log(
  `Length of the longest substring: ${non_repeat_substring('abccde')}`
);
