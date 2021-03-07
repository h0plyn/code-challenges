class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n)s | O(1)t - where n is the number of nodes in the LL
// Pointer Pattern
// Singly Linked List
function removeKthNodeFromEnd(head, k) {
  let fast = head;
  let slow = head;
  let counter = 1;

  while (counter <= k) {
    // Position fast pointer k nodes ahead
    fast = fast.next;
    counter++;
  }

  if (fast === null) {
    // Handle edge case where fast pointer is null after k node traversal
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  while (fast.next !== null) {
    // Move pointers simultaneously until FAST.NEXT is null
    // This leaves us 1 node behind the node to remove
    fast = fast.next;
    slow = slow.next;
  }

  // Allowing us to remove the node by skipping over it
  slow.next = slow.next.next;
}
