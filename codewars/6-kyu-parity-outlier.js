function findOutlier(integers){
    let evenArr = integers.filter(num => num % 2 === 0);
    let oddArr = integers.filter(num => num % 2 === 1);
   
    return oddArr.length < evenArr.length ? oddArr[0] : evenArr[0];
}
