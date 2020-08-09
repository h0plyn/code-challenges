// Complete the function splitPairs such that it splits the input string into pairs of characters. 
// If the input string has a length that is odd, then it should replace the missing second character 
// of the final pair with an underscore _. Note, an empty string should make your function produce 
// an empty array.

function splitPairs(input) {
    
    let results = [];

    if (input.length % 2) {
        input = input + '_'
    } else if (input === '') {
        return [];
    };

   for (let i = 0; i < 7 ; i += 2) {
    results.push(input.slice(i, i+2))
    };

    return results;

};

splitPairs('Kaitlin') // [ 'Ka', 'it', 'li', 'n_' ]