function helper(tree, count, depth) {
  if (!tree.value) return count;
  if (tree.left) {
    count = helper(tree.left, count, depth + 1);
  }
  if (tree.right) {
    count = helper(tree.right, count, depth + 1);
  }

  return count + depth;
}

function nodeDepths(root) {
  return helper(root, 0, 0);
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
