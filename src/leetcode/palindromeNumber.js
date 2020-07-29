// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same 
// backward as forward.

// Example 1:

// Input: 121
// Output: true

// Example 2:

// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. 
// Therefore it is not a palindrome.

// Example 3:

// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:

// Coud you solve it without converting the integer to a string?

//Pssudocode practice
// First, I'll need to change the input to a string. Next, I need to split the input 
// string into individual characters in an array saved to a variable. Next, The array needs to be reversed.
// After reversed, the array needs to be joined into it's new form. Lastly, run a conditional returning true or 
// false depending on if the reversed string is a palindrome equaling Input.

var isPalindrome = function(x) {
    const numString = x.toString()
    const reversedString = numString.split('').reverse().join('');

    return reversedString == x ? true : false;
};

isPalindrome(10201); //true


