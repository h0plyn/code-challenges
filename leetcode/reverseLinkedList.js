// O(n)t | O(1)s - where n is the number of nodes in the Linked List
var reverseList = function (head) {
  let prev = null;
  let curr = head;

  while (curr !== null) {
    // Hold our next node
    let tempNext = curr.next;
    // Reverse the pointer link
    curr.next = prev;
    // Move previous pointer to current node
    prev = curr;
    // Traverse to the next node
    curr = tempNext;
  }

  return prev;
};
