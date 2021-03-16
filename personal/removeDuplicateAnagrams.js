// Two strings are anagrams if they are permutations of each other. In other words, both strings have the same size and the same characters. For example, "aaagmnrs" is an anagram from "anagrams". Given an array of strings, remove each string that is an anagram of an earlier string, then return the remaining array in sorted order.

// O(nlogn) | O(n)s - where n is the length of anagrams
// nlogn comes from sorting the letters
function removeDuplicateAnagrams(arr) {
  let visited = {};
  let ans = [];

  for (let i = 0; i < arr.length; i++) {
    let currentWord = arr[i].split('').sort().join('');
    if (!visited[currentWord]) {
      visited[currentWord] = 1;
      ans.push(arr[i]);
    } else {
      visited[currentWord] += 1;
    }
  }
  return ans;
}

// input: ["code", "doce", "ecod", "framer", "frame"]
// output: ["code", "framer" frame"]

console.log(
  removeDuplicateAnagrams(['code', 'doce', 'ecod', 'framer', 'frame'])
);
