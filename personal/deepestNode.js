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
// const findDeepestDFS = (node) => {
//   debugger;
//   let deepestNode = node;
//   let deepestLevel = 0;

//   const find = (node, level = 0) => {
//     if (node) {
//       if (level > deepestLevel) {
//         deepestNode = node;
//         deepestLevel = level;
//       }

//       if (node.left) {
//         find(node.left, level + 1);
//       }
//       if (node.right) {
//         find(node.right, level + 1);
//       }
//     }
//   };

//   find(node);

//   return deepestNode;
// };

// O(n)t | O(n)s - where n is the number of nodes in the tree
function findDeepestBFS(node) {
  debugger;
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
