// let multiDimArray = [
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ];

// const flatten = (accumulator, currentEl) => {
//   return accumulator.concat(currentEl);
// };

// let flatArr = multiDimArray.reduce(flatten);

// console.log(flatArr);

function multi_dim_sum_array(arr) {
  debugger;
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == 'number') {
      sum += arr[i];
    } else {
      sum += multi_dim_sum_array(arr[i]);
    }
  }
  return sum;
}

console.log(multi_dim_sum_array([1, [2, [3, 4]]])); // 9
