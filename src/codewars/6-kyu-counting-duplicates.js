function duplicateCount(text){
    let duplicateCount = [];
    let sort = text.toLowerCase().split('').sort();

    for (let i = 0; i < sort.length; i++) {
        if (duplicateCount.indexOf(sort[i]) === -1 && sort[i] === sort[i+1]) {
            duplicateCount.push(sort[i]);
        }
    }

    return duplicateCount.length;
}

