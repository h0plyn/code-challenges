// Write a function that takes a string as input and reverse only the vowels of a string.

var reverseVowels = function (s) {
  let newString = '';
  let reversedVowels = s
    .split('')
    .filter((char) => 'aeiouAEIOU'.includes(char))
    .reverse();

  for (let i = 0; i < s.length; i++) {
    if ('aeiouAEIOU'.includes(s[i])) {
      newString += reversedVowels.shift();
    } else {
      newString += s[i];
    }
  }

  return newString;
};
