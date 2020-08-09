// Create a function that finds the word "bomb" in the given string. 
// If there is a bomb, return "Duck!!!" otherwise return "There is no bomb, relax.".


function bomb(str) {
    const strArr = str.toLowerCase().search("bomb");
    return strArr === -1 ? "There is no bomb, relax." : "Duck!!!";
}


console.log(bomb("There is a bomb.")) //➞ "Duck!!!"
console.log(bomb("Hey, did you think ther is a bomb?")) //➞ "Duck!!!"
console.log(bomb("This goes boom!!!")) //➞ "There is no bomb, relax."