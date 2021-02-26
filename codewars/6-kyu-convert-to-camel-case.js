// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if the original word was capitalized 
// (known as Upper Camel Case, also often referred to as Pascal case).

function toCamelCase(str){
    return str.replace(/[_-]/g, ' ')
    .split(' ')
    .map((word, i) => 
        i > 0 ? word[0].toUpperCase() + word.slice(1) : word.slice())
    .join('');
}  
