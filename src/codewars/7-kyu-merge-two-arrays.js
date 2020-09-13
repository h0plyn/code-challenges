//Write a function that combines two arrays by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
    let merged = [];
    let longest = 0;
    
    if (a.length > b.length) {
        longest = a.length;
    } else {
        longest = b.length;
    }

    for (let i = 0; i < longest; i++) {
        if (a.length > i) {
            merged.push(a[i]);
        }
        if (b.length > i) {
            merged.push(b[i]);
        }
    }

    return merged;
}
