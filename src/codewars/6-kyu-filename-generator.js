function generateName() {
    let alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let uniqueString = '';
    
    while (uniqueString.length <= 5) {
        uniqueString += alphabet[Math.floor(Math.random() * Math.floor(52))];
    }

    if (photoManager.nameExists(`${uniqueString}`) && uniqueString.length === 6) {
        return generateName();
    } else {
        return uniqueString;
    }
}
