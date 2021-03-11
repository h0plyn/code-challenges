// O(n)t | O(n)s - where n is the number of nodes in the tree
var postorder = function (root) {
  if (!root) return [];
  const stack = [root];
  const result = [];

  while (stack.length) {
    let currentNode = stack.pop();
    stack.push(...currentNode.children);
    result.push(currentNode.val);
  }

  return result.reverse();
};
