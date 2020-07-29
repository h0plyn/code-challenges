// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21


var reverse = function(x) {
    let reversedArray = x.toString().split('').reverse()
    let negativeCheck = reversedArray[reversedArray.length - 1];
    
    if (negativeCheck === '-') {
        reversedArray.pop()
        const arrToString = reversedArray.join('')
        const stringToNumber = Number(arrToString)
        const makeNegative = -Math.abs(stringToNumber)
        return makeNegative;
    } else {
        return Number(reversedArray.join(''));
    }
};


console.log(reverse(-123));