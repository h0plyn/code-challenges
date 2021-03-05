// O(n + m) | O(c)
// n is number of characters
// m is length of the document
// c is the length of characters in characters string
function generateDocument(characters, document) {
  let map = {};

  for (let letter of characters) {
    if (!map[letter]) map[letter] = 1;
    else map[letter] += 1;
  }

  for (let char of document) {
    if (!map[char]) return false;
    else map[char] -= 1;
  }

  return true;
}
