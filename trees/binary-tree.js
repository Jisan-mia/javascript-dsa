// binary tree rule

/* 
- each node can only have either 0,1 or 2 nodes
- and each child can have only one parents
- lookup O(log N)
- insert O(log N)
- delete O(log N)
*/

/* 
"Binary Search Tree" is a subset of binary tree
- its really good at searching
rules:
- all child nodes in the tree to the right of the root node must be greater than the current node
- all child nodes in the tree to the left of the root node must be less than the current node
- all right side child nodes increases
- all left side child nodes decreases
*/

// exercise-1: binary search tree
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if(this.root === null) {
      this.root = newNode
    } else {
      let currentNode = this.root

      while(true) {
        if(value < currentNode.value) {
          // left
          if(!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          // right
          if(!currentNode.right) {
            currentNode.right = newNode;
            return this
          }
          currentNode = currentNode.right
        }
      }
    }

     
  }

  lookup(value) {

  }
}

/* 
      9
  4       20
1   6   15  170
*/

const bst = new BinarySearchTree()
bst.insert(9)

console.log(bst)
