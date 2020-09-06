function disemvowel(str) {
    let noVowels = '';
    let vowel = 'aeiouAEIOU';
   
    for (let i = 0; i < str.length; i++) {
        let currentLetter = str[i];
        if (vowel.indexOf(currentLetter) === -1) {
            noVowels += currentLetter;
        } else {
            continue;
        }
    }

    return noVowels;
  }

