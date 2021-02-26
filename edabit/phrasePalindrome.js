// A palindrome is a series of letters or numbers that reads equivocally backwards.
// Write a recursive function that determines whether a given string is a palindrome or not.

function isPalindrome(p) {
  let normalized = p.replace(/[^a-zA-Z]/g, '').toLowerCase();

  if (p.length === 0) return true;

  if (normalized[0] !== normalized[normalized.length - 1]) {
    return false;
  } else {
    return isPalindrome(normalized.slice(1, -1));
  }
}
