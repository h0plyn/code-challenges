function liftoff(num) {
  if (num === 0) {
    console.log('Liftoff!');
  } else if (num > 0) {
    console.log(num);
    // num-- passed in as a parameter causes stack overflow
    // liftoff(num--);
    // --num decrements the num and gives the desired output
    // liftoff(--num)
    // num - 1 is the standard syntax
    liftoff(num - 1);
  }
}

liftoff(5); // should print
// 5
// 4
// 3
// 2
// 1
// Liftoff!
