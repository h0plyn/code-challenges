//Write a function that combines two arrays by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
    let merged = [];
    let longest = a.length > b.length ? a : b;

    for (let i = 0; i < longest.length; i++) {
        if (a.length > i) {
            merged.push(a[i]);
        }
        if (b.length > i) {
            merged.push(b[i]);
        }
    }

    return merged;
}
