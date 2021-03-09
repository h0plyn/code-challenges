class MinMaxStack {
  constructor() {
    this.min = null;
    this.max = null;
    this.stack = [];
  }

  // O(1)t | O(1)s
  peek() {
    return this.stack[this.stack.length - 1];
  }

  // O(1)t | O(1)s
  pop() {
    return this.stack.pop();
  }

  // O(1)t | O(1)s
  push(number) {
    if (number < this.min || this.min === null) this.min = number;
    if (number > this.max || this.max === null) this.max = number;
    this.stack.push(number);
  }

  // O(1)t | O(1)s
  getMin() {
    return Math.min(...this.stack);
  }

  // O(1)t | O(1)s
  getMax() {
    return Math.max(...this.stack);
  }
}
