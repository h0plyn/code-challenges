// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(arr) {
    let cache = {};
    
    for (let i = 0; i < arr.length; i++) {
        let currentNum = arr[i];
        if (!cache[currentNum]) {
            cache[currentNum] = 1;
        } else {
            cache[currentNum] += 1;
        }
    }

    for (number in cache) {
        if (cache[number] % 2 === 1) {
            return number * 1;
        } 
  }

  return 0;
}

