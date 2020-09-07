function sockMerchant(n, ar) {
    let sortedSocks = ar.sort((a, b) => a - b);
    let pairCount = 0;

    for (let i = 0; i<n; i++) {
        let currentSock = sortedSocks[i];
        let nextSock = sortedSocks[i+1];

        if (currentSock == nextSock) {
            pairCount++;
            i++;
        }
    }

    return pairCount
}
