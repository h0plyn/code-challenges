// O(n)t | O(d)s - where n is the total number of nodes in the tree and d is the
// depth of the deepest node
var invertTree = function (root) {
  if (!root) return root;
  let tempTree = root.left;
  root.left = root.right;
  root.right = tempTree;

  if (root.left) invertTree(root.left);
  if (root.right) invertTree(root.right);
  return root;
};
