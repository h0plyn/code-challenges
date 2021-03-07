class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
// ---- Generate our linked list ----
const linkedList = [5, 4, 3, 2, 1].reduce(
  (acc, val) => new ListNode(val, acc),
  null
);

// O(n)t | O(1)s - where n is the number of nodes in the Linked List
var reverseList = function (head) {
  debugger;
  let prev = null;
  let curr = head;

  while (curr !== null) {
    // Hold our next node, which gives us reference to the rest of our LL
    // This is the new LL we are building out
    let tempNext = curr.next; // 2 => 3 => 4 // 3 => 4
    // Reverse the pointer link
    curr.next = prev; // 1 => null
    // Move previous pointer to current node
    prev = curr; // 1 => null
    // Traverse to the next node
    curr = tempNext; // 2 => 3 => 4
  }

  return prev;
};

console.log(reverseList(linkedList));
