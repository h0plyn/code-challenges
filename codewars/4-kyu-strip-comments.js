function solution(input, markers) {
  let start = markers[0];
  let end = markers[1];

  return input
    .slice(input.indexOf(start), input.indexOf(end))
    .replace(start, '')
    .replace(end, '')
    .trim();
  //FIND the index of start and store it in a value
  //FIND the index of a end and store it
  console.log('apples, pears # and bananas\ngrapes\nbananas');
  console.log(input.indexOf(start));
  console.log(input.indexOf(`n`));
}

console.log(
  solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!'])
);
