/*

Write a function that takes in the head of a linked list, reverses the list, and returns the reversed list

Input: Node 1
1 -> 2 -> 3 -> 4 -> null

value
next

Output: Node 4
null <- 1 <- 2 <- 3 <- 4

current
prev
next

*/

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);

console.log('Initial Linked List', head);

function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

console.log('Reversed LL', reverseList(head));
