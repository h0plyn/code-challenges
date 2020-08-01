//Create a function that takes an array of numbers.
//Return the largest number in the array.

function findLargestNum(arr) {
    let sortedArr = arr.sort((a, b) => a - b)
    return sortedArr[sortedArr.length - 1];
}

findLargestNum([1000, 1001, 857, 1]) // 1001

