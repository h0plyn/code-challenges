//Given: an array containing hashes of names
//Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand

const list = (namesArr) => {
    if (!namesArr) {
        return '';
    }

    let formattedListStr = '';
    
    namesArr.forEach((element, i) => {
        if (i === namesArr.length - 2) {
            formattedListStr += `${element['name']} & `;
        } else if (i === namesArr.length - 1) {
            formattedListStr += `${element['name']}`;
        } else {
            formattedListStr += `${element['name']}, `;
        }
    })
       
    return formattedListStr;
};

