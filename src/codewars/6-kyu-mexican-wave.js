//	In this simple Kata your task is to create a function that turns a string 
// into a Mexican Wave. You will be passed a string and you must return that 
// string in an array where an uppercase letter is a person standing up.

const wave = (string) => {
    let waveArr = [];

    for (let i = 0; i < string.length; i++) {
        let currentCharUpperCase = string[i].toUpperCase();
        let wavey = ''
      
        wavey += string.slice(0, i) + currentCharUpperCase + string.slice(i+1);
        waveArr.push(wavey);
    }
    
    return waveArr;
};

