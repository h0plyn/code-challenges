class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

type Result = TreeNode | null;

// O(logn)t | O(n)s
function searchBST(root: Result, val: number): Result {
  if (root === null) return null;
  if (root.val === val) return root;

  if (val < root.val) return searchBST(root.left, val);
  if (val > root.val) return searchBST(root.right, val);
  return null;
}

function searchBSTIterative(root: Result, val: number): Result {
  while (root) {
    if (root.val === val) return root;
    else if (val < root.val) root = root.left;
    else if (val > root.val) root = root.right;
  }
  return null;
}
