function iTri(s){
    let swim = 2.4;
    let bike = 112;
    let run = 26.2;
    let total = swim + bike + run;

    if (s === 0) return 'Starting Line... Good Luck!';
    if (s <= swim) return {'Swim': `${(total - s).toFixed(2)} to go!` }
    if (s <= bike) return { 'Bike': `${(total - s).toFixed(2)} to go!` };
    if (s <= total - 10) return { 'Run': `${(total - s).toFixed(2)} to go!` };
    if (s > total - 10 && s < total) return { 'Run': 'Nearly there!' };
    if (s >= total) return `You're done! Stop running!`;
    
}
