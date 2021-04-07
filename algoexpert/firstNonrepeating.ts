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
