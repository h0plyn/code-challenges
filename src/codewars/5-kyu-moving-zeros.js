//Write an algorithm that takes an array and moves all of the 
//zeros to the end, preserving the order of the other elements.

var moveZeros = function (arr) {
    let zeroArr = arr.filter((el => el === 0))
    let newArr = arr.filter (el => el !== 0)

    return newArr.concat(zeroArr); 
}

