// Create a function that takes two strings as arguments and returns the number of times the first string 
// (the single character) is found in the second string.

function charCount(myChar, str) {

    const characterArr = str.split('').filter(char => char === myChar)
    return characterArr.length

};

charCount("a", "edabit") //➞ 1

charCount("c", "Chamber of secrets") //➞ 1

charCount("b", "big fat bubble") //➞ 4