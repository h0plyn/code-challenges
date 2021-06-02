// O(nlogn)t | O(n)s - where n is the length of the input array
// Sorting our anagrams @ nlogn is the most expensive operation in this algorithm
var groupAnagrams = function (strs) {
  const map = {};
  let idx = 0;

  for (let i = 0; i < strs.length; i++) {
    let normalized = strs[i].split('').sort().join('');
    if (!map.hasOwnProperty(normalized)) {
      map[normalized] = idx;
      idx++;
    }
  }

  let ans = new Array(Object.values(map).length).fill(0).map(() => new Array());
  for (let k = 0; k < strs.length; k++) {
    let idxPos = strs[k].split('').sort().join('');
    let mappedIdx = map[idxPos];
    ans[mappedIdx].push(strs[k]);
  }

  return ans;
};
