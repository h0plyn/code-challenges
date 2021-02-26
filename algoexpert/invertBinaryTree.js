function invertBinaryTree(tree) {
  let temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
  if (tree.left) invertBinaryTree(tree.left);
  if (tree.right) invertBinaryTree(tree.right);
  return tree;
}
