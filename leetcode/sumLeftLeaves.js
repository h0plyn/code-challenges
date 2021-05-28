// O(n)t | O(h)s - where n is the number of nodes in the tree and h is the height of the tallest branch
var sumOfLeftLeaves = function (root) {
  let sum = 0;

  function traverse(root, dir = false) { // init dir to false to not include root
    if (!root) return root;

    if (dir && !root.left && !root.right) sum += root.val; // if we're at a leaf, add val

    if (root.left) traverse(root.left, true); // traverse left and flip the bool so we know we're going left
    if (root.right) traverse(root.right, false); // traverse the right tree
  }

  traverse(root); // traverse the root

  return sum;
};
