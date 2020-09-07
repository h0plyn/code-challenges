function alphabetPosition(text) {

    return text.toLowerCase()
    .split(' ')
    .join('')
    .replace(/[^a-z]/g,'')
    .split('')
    .map(char => 'abcdefghijklmnopqrstuvwxyz'.indexOf(char) + 1)
    .join(' ');
}
