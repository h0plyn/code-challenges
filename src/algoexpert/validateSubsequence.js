function isValidSubsequence(array, sequence) {
  let arrIdx = 0;
  let seqIdx = 0;

  while (arrIdx < array.length && seqIdx < sequence.length) {
    if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
    arrIdx++;
  }

  return seqIdx === sequence.length;
}

// function isValidSubsequence(array, sequence) {
//   let same = [];

//   for (let i = 0; i < array.length; i++) {
//     if (sequence.includes(array[i])) same.push(array[i]);
//   }

//   for (let j = 0; j < sequence.length; j++) {
//     if (same[j] !== sequence[j]) return false;
//   }

//   return true;
// }
