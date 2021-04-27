/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack1 = []; // in stack
  this.stack2 = []; // out stack
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
// O(1)
MyQueue.prototype.push = function (x) {
  this.stack1.push(x); // add to top of in stack
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
// O(n)
MyQueue.prototype.pop = function () {
  // this is actually dequeuing from our queue
  if (!this.stack2.length) {
    // if the in stack is empty (makes sure we are keeping proper order if elements have been pushed since we have last dequeued)
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop()); // reverse our stack into our out stack [1,2,3] -> [3,2,1]
    }
  }
  return this.stack2.pop(); // dequeue
};

/**
 * Get the front element.
 * @return {number}
 */
// O(n)
MyQueue.prototype.peek = function () {
  if (!this.stack2.length) {
    // same logic as above
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
  }
  const front = this.stack2[this.stack2.length - 1];
  return front;
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
// O(1)
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0 && this.stack2.length === 0; // only empty if both stacks are clear
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
