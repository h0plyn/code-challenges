//Create a function that searches for the index of a given item in an array. 
//If the item is present, it should return the index, otherwise, it should return -1.

function search(arr, item, pos = 0) {
    if (pos >= arr.length) {
        return -1;
    }

    if (arr[pos] === item) {
        return pos;
    }

    return search(arr, item, pos + 1);
}

