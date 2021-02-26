let dictionary = {
    'a': 'aux',
    'the': 'aux',
    'girl' : 'N',
    'cookie' : 'N',
    'big' : 'adj',
    'tall' : 'adj',
    'scary' : 'adj'
  }

function replaceNounPhrases(sentence, pronouns, dictionary){
    // SPLIT sentence into an array
    let sentenceArr = sentence.split(' ');
    let pronounArr = [];
    let pronounCount = 0;
 

    
    for (let i = 0; i < sentenceArr.length; i++) {
        let currentWord = sentenceArr[i];
        let nextWord = sentenceArr[i+1];
        let pronounPhrase = (dictionary[currentWord] === 'aux' && dictionary[nextWord] === 'N') || (dictionary[currentWord] === 'adj' && dictionary[nextWord] === 'N');

        if (!dictionary[currentWord]) {
            pronounArr.push(currentWord)
        } else if (pronounPhrase){
            pronounArr.push(pronouns[pronounCount]);
            pronounCount++;
        } else if ((dictionary[currentWord] === 'aux' && !pronounPhrase) || (dictionary[currentWord] === 'adj' && !pronounPhrase)) {
        pronounArr.push(currentWord)
        }
    }
    




    // RETURN the new arr
    return pronounArr.join(' ')
}

console.log(replaceNounPhrases("a scary girl", ["she"], dictionary))