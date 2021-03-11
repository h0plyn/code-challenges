// O(n)t | O(n)s - where n is the number of nodes in the tree
var postorder = function (root) {
  if (!root) return [];
  const stack = [root]; // initialize stack with the root
  const result = [];

  while (stack.length) {
    let currentNode = stack.pop(); // make top of stack the current node to look at
    stack.push(...currentNode.children); // push all children to stack so they can be explored
    result.unshift(currentNode.val); // add the current value to the front of the result array
  }

  return result;
};
