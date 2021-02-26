function isPalindrome(string) {
  if (string.length === 0) return true;

  if (string[0] === string[string.length - 1]) {
    return isPalindrome(string.slice(1, -1));
  }

  return false;
}
