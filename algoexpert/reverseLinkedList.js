class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n)s | O(1)t - where n is the length of the LL
function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const tempNext = current.next;
    current.next = prev;
    prev = current;
    current = tempNext;
  }

  return prev;
}
