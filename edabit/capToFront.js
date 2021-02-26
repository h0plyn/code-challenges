//Create a function that moves all capital letters to the front of a word.
//Keep the original relative order of the upper and lower case letters the same.

function capToFront(s) {
    //Uppercase Array
    let upperArray = [];
    let newString = s;

    //Iterate through string
    let i = 0;
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) === s.charAt(i).toUpperCase()) {
            
             //Remove uppercase character
            newString = newString.replace(s.charAt(i), "");

            //Isolate Uppercase to Array
            upperArray.push(s.charAt(i));
            
        }
        
    }
    
    //Merge array items and concat to newString
    return upperArray.join('') + newString;
};

capToFront("hApPy");