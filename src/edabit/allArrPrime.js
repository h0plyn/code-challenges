// Create a function thats takes an array of integers and returns true if every number is prime. 
// Otherwise, return false.

function allPrime(nums) {
    if (nums.includes(1)) {
        return false;
    }

    for (let i = 0; i < nums.length; i++) {
        let currentNum = nums[i];

        for(let j = 2; j < currentNum; j++) {
            if (currentNum % j === 0) {
                return false;
            }
        }
    }

    return true;
}
