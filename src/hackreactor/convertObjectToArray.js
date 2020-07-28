// Write a function called "convertObjectToArray" which converts an object literal into 
// an array of arrays, like this:

// Argument:

// var input = {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// };
// Return value:

// [['name', 'Holly'], ['age', 35], ['role', 'producer']]

var input = {
    name: 'Holly',
    age: 35,
    role: 'producer'
  };

function convertObjectToArray(obj) {
    //Get object key-value pairs
    let enteries = Object.entries(obj);
    return enteries;

};

convertObjectToArray(input);