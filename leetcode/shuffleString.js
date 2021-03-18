// O(n)t | O(n)s - where n is the length of the input string s a
var restoreString = function (s, indices) {
  let restored = new Array(s.length).fill(null);

  for (let i = 0; i < s.length; i += 1) {
    restored[indices[i]] = s[i];
  }

  return restored.join('');
};
