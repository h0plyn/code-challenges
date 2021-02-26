// Create a function that determines whether a number is Oddish or Evenish. 
// A number is Oddish if the sum of all of its digits is odd, and a number 
// is Evenish if the sum of all of its digits is even. If a number is Oddish, 
// return "Oddish". Otherwise, return "Evenish".

function oddishOrEvenish(num) {
    const stringNum = num.toString().split('').reduce((a, b) => (a*1) + (b*1));
    
    return stringNum % 2 === 1 ? 'Oddish' : 'Evenish'
}  
