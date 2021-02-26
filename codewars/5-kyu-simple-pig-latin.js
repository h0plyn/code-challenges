// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

const pigIt = (string) => {
    let punctuation = ".,:;?!"
    let stringArr = string.split(' ');
    let pigString = '';

    stringArr.forEach((element) => {
        if (punctuation.indexOf(element) == -1) {
            pigString += element.slice(1) + element[0] + 'ay ';
        } else {
            pigString += element;
        }
    })
    
    return pigString;
};
