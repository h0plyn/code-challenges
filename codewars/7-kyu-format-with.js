// Write
// String.prototype.formatWith = function () {}
// that takes in a list of arguments and formats the string based off these arguments and indices.

String.prototype.formatWith = function () {
    debugger;
    let newString = this
    
    for (let i = 0; i < arguments.length; i++) {
        newString = newString.replace(`{${i}}`, arguments[i])
        newString = newString.replace(`{${i}}`, arguments[i])
    }

    return newString
}

