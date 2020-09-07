function wordValue(anArr) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let result = [];
    let pos = 1;
    
    for (let i = 0; i < anArr.length; i++) {
        let currentWord = anArr[i].split(' ').join('');
        let currentTotal = 0;

        for (let j = 0; j < currentWord.length; j++) {
            let currentChar = currentWord[j];
            let charNum = alphabet.indexOf(currentChar) + 1;
            currentTotal += charNum;
        }

        result.push(currentTotal * pos);
        pos++
    }
        
    return result;
}

