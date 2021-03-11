class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n)t | O(h)s - where n is the number of nodes and h is the height of the tree
function validateBst(tree, min = -Infinity, max = Infinity) {
  if (tree === null) return true;
  if (tree.value < min || tree.value >= max) return false; // make sure current node is in between min & max value
  const leftIsValid = validateBst(tree.left, min, tree.value); // traverse left tree, pass in new min value at each node

  return leftIsValid && validateBst(tree.right, tree.value, max); // traverse right tree, pass in new new max value at each node
}
