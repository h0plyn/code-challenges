// O(n)t | O(1)s
function isMonotonic(array) {
  let trendingUp = true;
  let trendingDown = true;

  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[i - 1]) trendingUp = false;
    if (array[i] > array[i - 1]) trendingDown = false;
  }

  return trendingUp || trendingDown;
}
