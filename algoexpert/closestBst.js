function findClosestValueInBst(tree, target) {
  return closestHelper(tree, target, tree.value);
}

function closestHelper(tree, target, closest) {
  if (tree === null) return closest;

  if (Math.abs(target - closest) > Math.abs(target - tree.value))
    closest = tree.value;

  if (target < tree.value) return closestHelper(tree.left, target, closest);
  if (target > tree.value) return closestHelper(tree.right, target, closest);
  return closest;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
