//Create a function that takes an array of numbers and returns only the even values.

function noOdds(arr) {
	return arr.filter(e => e % 2 === 2)
};

noOdds([1, 2, 3, 4, 5, 6, 7, 8]) //➞ [2, 4, 6, 8]
