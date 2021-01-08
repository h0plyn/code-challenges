// O(n)
function moveElementToEnd(array, toMove) {
  let startIdx = 0;
  let endIdx = array.length - 1;

  while (startIdx < endIdx) {
    if (array[startIdx] !== toMove) {
      startIdx++;
    } else if (array[endIdx] === toMove) {
      endIdx--;
    } else {
      let tmp = array[startIdx];
      array[startIdx] = array[endIdx];
      array[endIdx] = tmp;
    }
  }

  return array;
}
