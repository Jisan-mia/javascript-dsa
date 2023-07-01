// BFS --> Breadth First Search Algorithm
// binary search algorithm
const { BinarySearchTree } = require("../trees/binary-tree.js");

BinarySearchTree.prototype.breadthFirstSearch = function() {
  let currentNode = this.root;
  let list = []
  let queue = []

  queue.push(currentNode)

  while(queue.length > 0) {
    currentNode = queue.shift();
    console.log(currentNode.value)
    list.push(currentNode.value)

    if(currentNode.left) {
      queue.push(currentNode.left)
    }
    if(currentNode.right) {
      queue.push(currentNode.right)
    }
  }
  return list
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

console.log(myBST.breadthFirstSearch());