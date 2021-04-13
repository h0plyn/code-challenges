// O(nlogn)t | O(1)s - where n is the length of the input arrays (they both have the same amount of inputs)
// It would be better to reverse the array with a helper function instead of the built in sort
export function tandemBicycle(
  redShirtSpeeds: number[],
  blueShirtSpeeds: number[],
  fastest: boolean
) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  let left: number = 0;
  let right: number = redShirtSpeeds.length - 1;

  if (!fastest) blueShirtSpeeds.reverse();
  let totalSpeed: number = 0;

  while (left <= redShirtSpeeds.length && right >= 0) {
    totalSpeed += Math.max(redShirtSpeeds[right], blueShirtSpeeds[left]);
    left++;
    right--;
  }

  return totalSpeed;
}
