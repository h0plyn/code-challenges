class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n)t | O(1)s
// While this looks like O(n^2), we will only ever traverse the whole linked list once which gives us O(n) worst case time complexity
function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;

  while (currentNode !== null) {
    let searchNode = currentNode.next;
    while (searchNode !== null && currentNode.value === searchNode.value) {
      searchNode = searchNode.next;
    }

    currentNode.next = searchNode;
    currentNode = searchNode;
  }

  return linkedList;
}
