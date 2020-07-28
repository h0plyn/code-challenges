// Write a function 'transformFirstAndLast' that takes in an array, and returns an object 
// with:
// 1) the first element of the array as the object's key, and 2) the last element of the array as that key's value.

// Example input:

// var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// Function's return value (output):

// {
//   Queen : 'Beyonce'
// }
// Do not change the input array. Assume all elements in the input array will be of type 'string'.

// Note that the input array may have a varying number of elements. Your code should flexibly accommodate that.

// E.g. it should handle input like:

// ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Coleman']
// Function's return value (output):

// {
//   Kevin : 'Coleman'
// }

var input = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];

function transformFirstAndLast(array) {
    //Create object
    let result = {};
    
    // Get first element of Array
    const firstEl = array[0];

    // Get last element of Array
    const lastEl = array[array.length - 1]

    //Push key value pair to object
    result[firstEl] = lastEl
    
    // Return object
    return result
  };

transformFirstAndLast(input);