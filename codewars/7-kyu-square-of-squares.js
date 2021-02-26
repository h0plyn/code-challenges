const isSquare = (num) => {
    if (num < 0) {
        return false;
    }
    
    for (let i = 0; i <= num; i++) {
        let checkSq = i * i;

        if (checkSq > num) {
            return false;
        }

        if (checkSq === num) {
            return true;
        }
    }
};


//Testing the built-in JavaScript Square Root method
//
// function sqRt(num) {
//     return Number.isInteger(Math.sqrt(num));
// }
