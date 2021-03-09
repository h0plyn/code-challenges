// O(n)t | O(1)s
var detectCycle = function (head) {
  if (!head || !head.next || !head.next.next) return null;
  let tortoise = head.next;
  let hare = head.next.next;

  // Loop until we find the loops intersecting
  while (tortoise !== hare) {
    if (!hare || !hare.next) return null; // return null if no cycle
    tortoise = tortoise.next; // traverse 1x
    hare = hare.next.next; //traverse 2x
  }

  tortoise = head; // move pointer to head

  while (tortoise !== hare) {
    if (!hare.next) return null; // return null if no cycle
    // The distance from the head to the next intersection is the node that cycles
    tortoise = tortoise.next;
    hare = hare.next;
  }

  return tortoise; // return cycling node
};
