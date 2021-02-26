const split = (arr) => {
  const half = Math.ceil(arr.length / 2);

  const firstHalf = arr.slice(0, half);
  const secondHalf = arr.slice(half);

  return [firstHalf, secondHalf];
};

const merge = (arr1, arr2) => {
  const newArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      newArr.push(arr1.shift());
    } else {
      newArr.push(arr2.shift());
    }
  }

  return newArr.concat(arr1.slice()).concat(arr2.slice());
};

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  } else {
    const newArray = split(arr);
    const firstArr = newArray[0];
    const secondArr = newArray[1];

    return merge(mergeSort(firstArr), mergeSort(secondArr));
  }
};
