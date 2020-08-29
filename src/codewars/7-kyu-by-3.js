function divisibleByThree(str) {
    let sum = str.split('')
    .reduce((a, b) => parseInt(a) + parseInt(b));
    
    return sum % 3 === 0 ? true : false;
}
