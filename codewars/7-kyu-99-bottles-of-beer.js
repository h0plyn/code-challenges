function sing() {
    let song = [];

    for (let i = 99; i >= 1; i--) {
        let currentBottles = i,
            nextBottles = i - 1;
        

        if (currentBottles > 2) {
            song.push(`${currentBottles} bottles of beer on the wall, ${currentBottles} bottles of beer.`);
            song.push(`Take one down and pass it around, ${nextBottles} bottles of beer on the wall.`);
        }

   
        if (currentBottles === 2) {
            song.push(`${currentBottles} bottles of beer on the wall, ${currentBottles} bottles of beer.`);
            song.push(`Take one down and pass it around, ${nextBottles} bottle of beer on the wall.`);
        }

       
    
        if (currentBottles === 1) {
            song.push(`${currentBottles} bottle of beer on the wall, ${currentBottles} bottle of beer.`);
            song.push(`Take one down and pass it around, no more bottles of beer on the wall.`);
        }
    }

    song.push(`No more bottles of beer on the wall, no more bottles of beer.`);
    song.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`);
    return song;
};

sing()