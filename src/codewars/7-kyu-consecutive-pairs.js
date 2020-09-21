//In this Kata your task will be to return the count of pairs that have consecutive numbers

function pairs(ar){
    let count = 0;

    for (let i = 0; i < ar.length; i += 2) {
        if (ar[i] === (ar[i+1] + 1) || ar[i] === (ar[i+1] - 1)) {
            count++
        }
    }

    return count;
};
