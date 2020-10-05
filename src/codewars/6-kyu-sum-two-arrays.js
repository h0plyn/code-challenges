// Your task is to create a function called sum_arrays() in Python or addArrays in Javascript, which takes two arrays 
// consisting of integers, and returns the sum of those two arrays.
// The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal '3' + '2' + '9' converted to an 
// integer for this kata, meaning it would equal 329. The output should be an array of the the sum in a similar fashion 
// to the input (for example, if the sum is 341, you would return [3,4,1]). Examples are given below of what two arrays should return.

function addArrays(array1, array2) {
    let arrayToNumber1 = parseInt(array1.join(''));
    let arrayToNumber2 = parseInt(array2.join(''));
    if (array1 === 'undefined' && array2 === 'undefined') return [];
    if (isNaN(arrayToNumber1)) arrayToNumber1 = 0;
    if (isNaN(arrayToNumber2)) arrayToNumber2 = 0;

    let finalSum = arrayToNumber1 + arrayToNumber2;
   
    finalSum = finalSum.toString().split('').map(el => parseInt(el));

    if(isNaN(finalSum[0])) {
        finalSum[1] = ~finalSum[1] + 1;
        finalSum.shift();
    }

    return finalSum[0] !== 0 ? finalSum : []
}
