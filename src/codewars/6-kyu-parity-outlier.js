function findOutlier(integers){
    let evenArr = [];
    let oddArr = [];

    integers.forEach(num => {num % 2 === 0 ? evenArr.push(num) : oddArr.push(num)})

    return oddArr.length < evenArr.length ? oddArr[0] : evenArr[0];
}