// O(n)t | O(n)s - where n is the number of buildings in the array
function sunsetViews(buildings, direction) {
  let towers = [];
  let tallest = 0;
  let idx = direction === 'EAST' ? buildings.length - 1 : 0; // choose iteration direction

  while (idx >= 0 && idx < buildings.length) {
    // loop until idx is out of bounds
    if (buildings[idx] > tallest) {
      towers.push(idx);
      tallest = buildings[idx]; // keep track of max building height
    }

    if (direction === 'EAST') idx -= 1;
    else idx += 1;
  }

  return direction === 'EAST' ? towers.reverse() : towers; // return idx in ascending order
}
