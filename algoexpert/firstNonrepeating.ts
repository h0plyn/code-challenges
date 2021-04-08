// O(n)t | O(1)s - where n is the length of the input array
// Constant time because we know the largest are hashmap will grow is 26 characters
export function firstNonRepeatingCharacter(string: string) {
  interface Hashmap {
    [key: string]: number;
  }
  let map: Hashmap = {};

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (!map[character]) {
      map[character] = 0;
    }
    map[character] += 1;
  }

  for (let i = 0; i < string.length; i++) {
    let character = string[i];
    if (map[character] === 1) return i;
  }

  return -1;
}
