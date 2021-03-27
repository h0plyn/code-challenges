// O(n)t | O(1)s - where n is the length of the flower bed
var canPlaceFlowers = function (flowerbed, n) {
  let plantable = 0;
  for (let i = 0; i < flowerbed.length; i += 1) {
    if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
      plantable += 1;
      flowerbed[i] = 1;
    }
  }
  return plantable >= n;
};
