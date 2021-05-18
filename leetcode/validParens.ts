// O(n) | O(n) - where n is the length of the input s
function isValid(s: string): boolean {
  let closers: { [key: string]: string } = {
    ']': '[',
    ')': '(',
    '}': '{',
  };

  let stack: string[] = [];
  for (let char of s) {
    if (closers[char]) {
      if (closers[char] === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return !stack.length;
}
