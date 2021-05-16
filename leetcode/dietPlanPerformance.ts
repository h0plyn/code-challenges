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
