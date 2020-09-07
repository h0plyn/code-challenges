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
