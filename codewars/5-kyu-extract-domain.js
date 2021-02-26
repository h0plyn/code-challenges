// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.

function domainName(url) {
    return url.replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('.')[0]
}

// function domainName(url){
//     let modifiedStr = url;

//     if (modifiedStr.includes('https://www.')) {
//         modifiedStr = modifiedStr.replace(/https:\/\/www./g, '')
//         let domainEndIdx = modifiedStr.indexOf('.')
//         modifiedStr = modifiedStr.slice(0, domainEndIdx)
//     }

//     if (modifiedStr.includes('https://')) {
//         modifiedStr = modifiedStr.replace(/https:\/\//g, '')
//         let domainEndIdx = modifiedStr.indexOf('.')
//         modifiedStr = modifiedStr.slice(0, domainEndIdx)
//     }

//     if (modifiedStr.includes('http://www.')) {
//         modifiedStr = modifiedStr.replace(/http:\/\/www\./g, '')
//         let domainEndIdx = modifiedStr.indexOf('.')
//         modifiedStr = modifiedStr.slice(0, domainEndIdx)
//     }

//     if (modifiedStr.includes('http://')) {
//         modifiedStr = modifiedStr.replace(/http:\/\//g, '')
//         let domainEndIdx = modifiedStr.indexOf('.')
//         modifiedStr = modifiedStr.slice(0, domainEndIdx)
//     }

//     if (modifiedStr.includes('www.')) {
//         modifiedStr = modifiedStr.replace(/www./g, '')
//         let domainEndIdx = modifiedStr.indexOf('.')
//         modifiedStr = modifiedStr.slice(0, domainEndIdx)
//     }

//     if (modifiedStr.includes('.')) {
//         let domainEndIdx = modifiedStr.indexOf('.')
//         modifiedStr = modifiedStr.slice(0, domainEndIdx)
//     }

//     return modifiedStr
// }
