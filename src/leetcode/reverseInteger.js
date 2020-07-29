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
    const reversedArray = x.toString().split('').reverse();
    let reversedNumber;

    if (reversedArray.includes('-')) {
        reversedArray.pop()
       reversedNumber = -Math.abs(reversedArray.join(''));
    } else {
       reversedNumber = Number(reversedArray.join(''));
    };
    //Add 32 bit integer handling
    if ((reversedNumber < -Math.pow(2,31) - 1) || (reversedNumber > Math.pow(2,31) - 1)) {
        return 0;
    };
       return reversedNumber;
    };




console.log(reverse(-1534236469));