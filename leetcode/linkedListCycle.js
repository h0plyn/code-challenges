// O(n)t | O(1)s where n is the length of the LL
var hasCycle = function (head) {
  if (!head || !head.next || !head.next.next) return false;
  let tortoise = head.next;
  let hare = head.next.next;

  while (hare.next) {
    if (tortoise === hare) return true;
    tortoise = tortoise.next;
    if (!hare.next.next) return false;
    hare = hare.next.next;
  }
  return false;
};
