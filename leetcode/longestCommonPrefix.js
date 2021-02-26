var longestCommonPrefix = function (strs) {
  let prefix = 0;

  while (strs[0][prefix] === strs[1][prefix]) {
    if (strs[0][prefix] !== strs[1][prefix]) break;
    prefix++;
  }

  for (let i = 2; i < strs.length; i++) {
    let currEl = strs[i];
    let tempPrefix = prefix;
    if (currEl.slice(0, prefix) !== strs[0].slice(0, prefix)) {
      while (currEl.slice(0, tempPrefix) !== strs[0].slice(0, tempPrefix)) {
        if (tempPrefix === 0) return '';
        tempPrefix--;
      }
      prefix = tempPrefix;
    }
  }

  return strs[0].slice(0, prefix);
};
