// Brute force
// O(n * k)t | O(1)s
function dietPlanPerformance(
  calories: number[],
  k: number,
  lower: number,
  upper: number
): number {
  let points: number = 0;
  for (let i = 0; i < calories.length; i++) {
    let timeframe: number = 0;
    for (let j = i; j < i + k; j++) {
      timeframe += calories[j];
    }
    if (timeframe > upper) points++;
    if (timeframe < lower) points--;
  }
  return points;
}

// Sliding Window
// O(n)t | O(1)s
function dietPlanPerformance(
  calories: number[],
  k: number,
  lower: number,
  upper: number
): number {
  let points: number = 0;
  let start: number = 0;
  let calCount: number = 0;

  for (let end = 0; end < calories.length; end++) {
    calCount += calories[end]; // add current element to calCount

    if (end < k - 1) continue; // if the window hasn't reach k length, keep adding elements
    if (end > k - 1) { // if the window is larger than the fixed window size (k)
      calCount -= calories[start]; // remove the starting element value from calCount
      start++; // increment the start to
    }

    if (calCount > upper) points++; // add points if over goal
    if (calCount < lower) points--; // subtract points if under goal
  }
  return points;
}
