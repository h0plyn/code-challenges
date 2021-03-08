class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n)s | O(1)t
function findLoop(head) {
  let tortoise = head.next;
  let hare = head.next.next;

  while (hare !== tortoise) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  // Move tortoise back to head while hare stays where the pointers overlapped
  tortoise = head;
  while (hare !== tortoise) {
    // The hares remaining distance is equal to the distance from the head
    // to the looping node
    tortoise = tortoise.next;
    hare = hare.next;
  }
  return tortoise;
}
