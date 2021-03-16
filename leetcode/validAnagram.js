// Brute force code wars solution
// O(nlog + mlogm)s | O(n + m)s
// var isAnagram = function (s, t) {
//   return s.split('').sort().join('') === t.split('').sort().join('');
// };

// O(n + m)t | O(n)s
function isAnagram(s, t) {
  if (s.length !== t.length) return false;
  let sMap = {};

  for (let char in s) {
    if (!sMap[char]) sMap[char] = 1;
    else sMap[char] += 1;
  }

  for (let char in t) {
    if (sMap[char] === 0) return false;
    sMap[char] -= 1;
  }

  return true;
}

console.log(isAnagram('anagram', 'nagaram'));
