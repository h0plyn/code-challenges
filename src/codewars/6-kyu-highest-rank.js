// Complete the method which returns the number which is most frequent in the given 
// input array. If there is a tie for most frequent number, return the largest number 
// among them.

// Note: no empty arrays will be given.

function highestRank(arr){
    let cache = {};

    arr.forEach(element => {
        if (!cache[element]) {
            cache[element] = 1;
        } else {
            cache[element] += 1;
        }
    })
   
    let prevObjCount = 0;
    let highestRankKey = '';

    for (let key in cache) {
        if (cache[key] > prevObjCount) {
            highestRankKey = key;
            prevObjCount = cache[key];
        }
    }

    for (let key in cache) {
        if (parseInt(cache[key]) < parseInt(prevObjCount)) {
            delete cache[key];
        }
    }

    let tieBreakerArr = [];

    for (let key in cache) {
        tieBreakerArr.push(key);
    }

    return Math.max(...tieBreakerArr);
}
