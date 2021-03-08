/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}

 1. Init Counter
 2. Traverse Counter until left - 1
 3. Store left - 1
 4. Store tail (counter = left)
 5. Reverse until counter = right + 1
 6. Return head
 */

var reverseBetween = function (head, left, right) {
  if (!head.next) return head;
  let counter = 1;
  let currentNode = head;
  let start = head;
  let tail = null;

  while (counter < left) {
    start = currentNode;
    currentNode = currentNode.next;
    counter += 1;
  }

  tail = currentNode;
  let newList = null;

  while (counter >= left && counter <= right) {
    let nextNode = currentNode.next;
    currentNode.next = newList;
    newList = currentNode;
    currentNode = nextNode;
    counter += 1;
  }

  start.next = newList;
  tail.next = currentNode;

  return left > 1 ? head : newList;
};
