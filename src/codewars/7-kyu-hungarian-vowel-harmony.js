// owel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" 
// (wikipedia). This kata is based on vowel harmony in Hungarian.
// Task:
// Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append 
// the correct suffix nek or nak to the word w based on vowel harmony rules.
// Vowel Harmony Rules (simplified)
// When the last vowel in the word is
// a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
// a back vowel (a, á, o, ó, u, ú) the suffix is -nak

function dative(word) {
    let harmony = [...word].filter(char => 'aáoóuú'.lastIndexOf(char) !== -1)
    console.log(harmony)
    return harmony.length >= 1 ? word += 'nak' : word += 'nek'
}
