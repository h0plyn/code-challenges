class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root, count = 0, branchCount = []) {
  count += root.value;
  if (!root.left && !root.right) branchCount.push(count);
  if (root.left) this.branchSums(root.left, count, branchCount);
  if (root.right) this.branchSums(root.right, count, branchCount);
  return branchCount;
}
