// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
// ##Examples :
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

//https://www.codewars.com/kata/552c028c030765286c00007d/train/javascript

// let numbers = "2 2 9 2 2 2";
let numbers = "2 4 7 8 10"

function iqTest(numbers){
    //Empty Array for Number
    let numArray = []
    
    //Split string of numbers to individual strings in an array
    let singleStrArr = numbers.split(" ");

    //Push integers into an array
    for (i = 0; i < singleStrArr.length; i++) {
        let num = singleStrArr[i] * 1;
        numArray.push(num)
    };

    //Check if even numbers > odd numbers
    let evenEl = 0;
    let oddEl = 0;
    
    for (let j = 0; j < numArray.length; j++) {
        if (numArray[j] % 2 === 0) {
            evenEl++;
        } else {
            oddEl++;     
        }
     };
   
    //Blocking the first indices to start at 1
   numArray.unshift(NaN);
   
   //if even >  odd, return indexOf odd
   let even = (element) => element % 2 === 0
   let odd = (element) => element % 2
   if (evenEl > oddEl) {
       return numArray.findIndex(odd)
   } else {
       return numArray.findIndex(even)
   }
};
    
iqTest(numbers);

//Tests
// Test.assertEquals(iqTest("2 4 7 8 10"),3);
// Test.assertEquals(iqTest("1 2 2"), 1);