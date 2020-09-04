function duplicateEncode(word){
    let charArr = word.toLowerCase().split('');
    let encodedString = '';
    let cache = {};
    
    charArr.forEach(el => {
        cache[el] = (cache[el] || 0) + 1;
    })

    for (let i = 0; i < charArr.length; i++) {
        let currentChar = charArr[i];

        if (cache[currentChar] > 1) {
            encodedString += ')';
        } else {
            encodedString += '(';
        }
    }

    return encodedString;
}

console.log(duplicateEncode('Success'))