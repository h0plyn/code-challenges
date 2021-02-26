//Create a function that takes a string and returns the word count. 
// The string will be a sentence.

function countWords(str) {
	return str.split(' ').length;
}

countWords("Just an example here move along"); // 6
countWords("This is a test"); // 4
countWords("What an easy task, right"); // 5