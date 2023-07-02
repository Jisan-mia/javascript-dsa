// DFS --> Depth First Search Algorithm

// binary search algorithm
const { BinarySearchTree } = require("../trees/binary-tree.js");



BinarySearchTree.prototype.DFSInOrder = function() {
  return traverseInOrder(this.root, [])
}

BinarySearchTree.prototype.DFSPostOrder = function() {
  return traversePostOrder(this.root, []);
}

BinarySearchTree.prototype.DFSPreOrder = function() {
  return traversePreOrder(this.root, []);
}


function traverseInOrder(node, list) {
  if(node.left) {
    traverseInOrder(node.left, list)
  }
  list.push(node.value)
  if(node.right) {
    traverseInOrder(node.right, list)
  }

  return list;
} 

function traversePreOrder(node, list) {
  list.push(node.value);

  if (node.left) {
    traversePreOrder(node.left, list);
  }
  if (node.right) {
    traversePreOrder(node.right, list);
  }

  return list;
} 


function traversePostOrder(node, list) {

  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);

  return list;
} 
/* 
      9
  4       20
1   6   15  170
*/

const myBST = new BinarySearchTree()
myBST.insert(9)
myBST.insert(20);
myBST.insert(15);
myBST.insert(170);
myBST.insert(4);
myBST.insert(6);
myBST.insert(1);
console.log(myBST)

console.log(myBST.DFSInOrder());
console.log(myBST.DFSPreOrder())
console.log(myBST.DFSPostOrder());