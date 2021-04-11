function minJumps(nums: number[]): number {
  let jumps: number = 1;

  let currentEnd: number = nums[0];
  let furthest: number = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (i === nums.length - 1) return jumps;

    furthest = Math.max(furthest, nums[i] + i);

    if (i === currentEnd) {
      jumps += 1;
      currentEnd = furthest;
    }
  }

  return jumps;
}
