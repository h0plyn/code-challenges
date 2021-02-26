// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function 
// that determines whether a string that contains only letters is an isogram. Assume the empty string is 
// an isogram. Ignore letter case.

function isIsogram(str){
    let lowerString = str.toLowerCase();
    for (let i = 0; i < lowerString.length; i++) {
        for (let j = i+1; j < lowerString.length; j++) {
            if (lowerString[i] === lowerString[j]) {
                return false;
            }
        }
    }
    return true;
};
