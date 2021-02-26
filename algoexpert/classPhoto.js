// O(nlog(n))t | O(1)s
// n log(n) because we are sorting both inputs

function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);
  let redHeightCheck = Math.max(...redShirtHeights);
  let blueHeightCheck = Math.max(...blueShirtHeights);

  let tallArr =
    redHeightCheck > blueHeightCheck ? redShirtHeights : blueShirtHeights;
  let shortArr =
    redHeightCheck < blueHeightCheck ? redShirtHeights : blueShirtHeights;

  for (let i = 0; i <= tallArr.length; i++) {
    if (shortArr[i] >= tallArr[i]) return false;
  }

  return true;
}
