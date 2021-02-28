class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)t | O(1)s
  setHead(node) {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  // O(1)t | O(1)s
  setTail(node) {
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  // O(1)t | O(1)s
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;

    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  // O(1)t | O(1)s
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;

    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  // O(p)t | O(1)s
  // O(p) time because we are only traversing to p position
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let currentNode = this.head;
    let currentPosition = 1;

    while (currentNode !== null && currentPosition !== position) {
      currentNode = currentNode.next;
      currentPosition++;
    }
    if (currentNode !== null) {
      this.insertBefore(currentNode, nodeToInsert);
    } else {
      this.setTail(nodeToInsert);
    }
  }

    // O(n)t | O(1)s
  removeNodesWithValue(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      const nodeToRemove = currentNode;
      currentNode = currentNode.next;
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  // O(1)t | O(1)s
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;
    this.removeBindings(node);
  }

  // O(n)t | O(1)s
  containsNodeWithValue(value) {
    let currentNode = this.head;
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    return currentNode !== null;
  }

  removeBindings(node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.prev = null;
    node.next = null;
  }
}
