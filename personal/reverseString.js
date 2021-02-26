//I've been reversing a lot of strings and itegers in coding challenges recently.
//I want to test reversing a string with a simple for loop.
//Input will always be a string

// Pseudocode practice
// Define last character in String, use that as i
// Define newString
// Define for loop.
// Decrement the for loop
// Concat new string

const reverseString = (x) => {
    let startPosition = x.length
    let newString = '';

    for (let i = startPosition - 1; i >= 0 ; i--) {
        newString += x[i]
     }
     return newString;
};


console.log(reverseString('Stanley'));
