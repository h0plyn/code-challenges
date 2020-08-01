// Complete the function splitPairs such that it splits the input string into pairs of characters. 
// If the input string has a length that is odd, then it should replace the missing second character 
// of the final pair with an underscore _. Note, an empty string should make your function produce 
// an empty array.

function splitPairs(input) {
    
    let results = [];

    if (input.length % 2) {
        input = input + '_'
    }

    for (let i = 0; i < input.length + 1; i++){
        const inputOne = input.charAt(i)
        
        for (let j = i + 1; j < input.length + 1; j++){
        const inputTwo = input.charAt(j)
        let pair = input.slice(inputOne, inputTwo)
        results.push(pair)
        pair = pair.replace(i, "");
        pair = pair.replace(j, "");
        
        }
        return results;
    }
}


  console.log(splitPairs('Stanley'));