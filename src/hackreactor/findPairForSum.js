// Given a list of non-negative integers and a target sum, find a pair of 
// numbers that sums to the target sum.


function findPairForSum(integers, target) {
    let i = 0;
    let j = 0;
    let sumNum = []

    for (i = 0; i < integers.length; i++) {
        for (j = 0 + 1; j < integers.length; j++) {
            if  (integers[i] + integers[j] === target) {
                return [integers[i], integers[j]];
            } 
        }
    }

};

// example
var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]