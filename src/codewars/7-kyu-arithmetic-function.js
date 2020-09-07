// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers 
// having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".
// Try to do it without using if statements!

function arithmetic(a, b, operator) {
    const math = {
        "add":  function() {
            return a + b;
        },
        "subtract": function() {
            return a - b;
        },
        "multiply": function() {
            return a * b;
        },
        "divide": function() {
            return a / b;
        }
   };

    return math[operator]();
}
