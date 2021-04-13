function node(val) {
  return {
    val,
    left: null,
    right: null,
  };
}
let a = node('a');
let b = node('b');
let c = node('c');
let d = node('d');
let e = node('e');
let f = node('f');

a.left = b;
a.right = c;
b.right = d;
d.left = f;
c.left = e;

// // O(n)t | O(d)s - where n is the number of nodes and d is the depth of the deepest branch
function findDeepestDFS(node, level = 0, deepest = 0, deepestNode = null) {
  if (level > deepest) {
    // if we're at the deepest level
    deepestNode = node; // update deepest node
    deepest = level; // update deepest level
  }

  if (node.left) return findDeepest(node.left, level + 1, deepest, deepestNode); // traverse deeper nodes on the left, adding 1 to level each time we go deeper, bring the references with us
  if (node.right)
    return findDeepest(node.right, level + 1, deepest, deepestNode); // // traverse deeper nodes on the left, adding 1 to level each time we go deeper, bring the references with us

  return deepestNode.val;
}

// O(n)t | O(n)s - where n is the number of nodes in the tree
function findDeepestBFS(node) {
  let queue = [node];

  let current;
  while (queue.length) {
    current = queue.shift();
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return current;
}

console.log(findDeepestBFS(a)); //Result: f
