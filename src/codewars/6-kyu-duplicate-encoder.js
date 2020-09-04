function duplicateEncode(word) {
    return word
        .toLowerCase()
        .split('')
        .map((element, index, word) => {
            return word.indexOf(element) == word.lastIndexOf(element) ? '(' : ')'
        })
        .join('')
}

console.log(duplicateEncode("Success"))