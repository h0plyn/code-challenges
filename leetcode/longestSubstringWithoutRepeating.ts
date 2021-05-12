// O(n)t | O(1)s - where n is the length of the string. charMap is fixed to 26 characters so it's O(1)s
function lengthOfLongestSubstring(s: string): number {
  let longest: number = 0;
  let start: number = 0;
  let charMap: { [key: string]: number } = {};

  for (let end = 0; end < s.length; end++) {
    let rightChar: string = s[end];
    if (rightChar in charMap) { // if char is in the window
      start = Math.max(start, charMap[rightChar] + 1); // move the window start to that char's idx + 1
    }

    charMap[rightChar] = end; // store char and idx
    longest = Math.max(longest, end - start + 1); // track longest
  }
  return longest;
}
