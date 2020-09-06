// You are given an array(list) strarr of strings and an integer k. Your task is to return the first 
// longest string consisting of k consecutive strings taken in the array.
// Example:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
// Note
// consecutive strings : follow one after another without an interruption

function longestConsec(strArr, k) {
    let longestString = '';
   
    if (k > strArr.length || k <= 0 || strArr.length === 0) {
        return longestString;
    }
   
    for (let i = 0; i < strArr.length; i++) {
        let newWord = strArr.slice(i, i + k).join('');
        
        if (newWord.length > longestString.length) {
            longestString = newWord;
        }
    }

    return longestString;
}
