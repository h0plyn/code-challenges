function countingValleys(numOfSteps, directionStr) {
    let sealevel = 0;
    let valleyCount = 0;
  
    for (let i = 0; i <= numOfSteps; i++) {
        let currentDirection = directionStr[i];

        if (currentDirection === 'U') {
             sealevel++ 
             if (sealevel === 0) {
                 valleyCount++;
             }
        } else {
            sealevel--;
        }
    }

    return valleyCount;
}

