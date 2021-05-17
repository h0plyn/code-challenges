class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// O(n)t | O(1)s
function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (!head) return null;

  while (head) {
    if (head.val === val) head = head.next;
    // if our head needs to be removed, move our head forward
    else break;
  }

  let curr: ListNode | null = head;
  while (curr && curr.next) {
    if (curr.next.val === val) {
      // if our next node needs to be removed
      curr.next = curr.next.next; // set our curr.next to skip the node to remove
    } else {
      curr = curr.next; // move pointer forward
    }
  }

  return head; // return the input list since we removed elements in place
}
