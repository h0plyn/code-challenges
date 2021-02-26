function compareTriplets(a, b) {
    let bobPoints = 0;
    let alicePoints = 0;
        
    for (let i = 0; i < a.length; i++) {
      
        if (a[i] === b[i]) {
            continue;
        }

        if (a[i] > b[i]) {
            alicePoints += 1;
        } else if (a[i] < b[i]) {
            bobPoints += 1;
        }

    }
    
    return [alicePoints, bobPoints];
}