// Create a function that takes an array of strings and returns an array 
// with only the strings that have numbers in them. If there are no strings 
// containing numbers, return an empty array.

function numInStr(arr) {
    let numStrArr = [];
    arr.forEach(el => {
        if (el.match(/[0-9]/g)) {
            numStrArr.push(el);
        }
    })
	return numStrArr;
}