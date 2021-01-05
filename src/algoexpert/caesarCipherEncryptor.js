// O(n)t | O(n)s
function caesarCipherEncryptor(string, key) {
  let newString = [];
  key = key % 26;

  for (let i = 0; i < string.length; i++) {
    let shiftedChar = string[i].charCodeAt() + key;

    if (shiftedChar <= 122) {
      newString.push(String.fromCharCode(shiftedChar));
    } else {
      newString.push(String.fromCharCode(96 + (shiftedChar % 122)));
    }
  }
  return newString.join('');
}
