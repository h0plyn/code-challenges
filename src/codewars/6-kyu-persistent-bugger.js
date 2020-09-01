// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative 
// persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

const persistence = (num) => {
    let digitArr = num.toString().split('').reduce((a, b) => parseInt(a) * parseInt(b));
    return num < 10 ? 0 : persistence(digitArr) + 1;
};

