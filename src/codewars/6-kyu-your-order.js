//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words) {
    let wordsArr = words.split(' ');
    let correctOrder = [];

    for (let i = 0; i < wordsArr.length; i++) {
        let currentWord = wordsArr[i];
        
        for (let j = 0; j < currentWord.length; j++) {
            let char = currentWord[j];
            
            if ('0123456789'.indexOf(char) !== -1) {
                correctOrder[char] = currentWord;
            }
        }
    }
    
    correctOrder.shift();
    
    return correctOrder.join(' ');
}
