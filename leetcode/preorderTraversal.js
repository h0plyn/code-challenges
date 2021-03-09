// O(n)t | O(h)s - where n is the number of nodes and h is the height of the tree
var preorderTraversal = function (root, visitedNodes = []) {
  if (!root) return visitedNodes;
  visitedNodes.push(root.val);
  if (root.left) preorderTraversal(root.left, visitedNodes);
  if (root.right) preorderTraversal(root.right, visitedNodes);

  return visitedNodes;
};
