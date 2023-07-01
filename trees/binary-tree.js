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
    if(!this.root) return false

    let currentNode = this.root
    while(currentNode) {
      if(value < currentNode.value) {
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        currentNode = currentNode.right
      } else if(currentNode.value === value) {
        return currentNode
      }
    }
    return false
  }

  remove(value) {
    if(!this.root) {
      return false
    }

    let currentNode = this.root
    let parentNode = null;

    while(currentNode) {
      if(value < currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.left
      } else if(value > currentNode.value) {
        parentNode = currentNode
        currentNode = currentNode.right
      } else if(currentNode.value === value) {
        // main work starts here

        // options 1: no right child
        if(currentNode.right === null) {
          if(parentNode === null) {
            this.root = currentNode.left
          } else {
            // if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parent.left = currentNode.left

              // if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left
            }
          }

          // option 2: right child which does have a left child
        } else if(currentNode.right.left === null) { 
          if(parentNode === null) {
            this.root = currentNode.left
          } else {
            currentNode.right.left = currentNode.left

            // if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left

              //if parent < current, make right child a right child of the parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right
            }
          }

          // option 3: right child that has a left child
        } else {
          // find the right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right
          while(leftmost.left !== null) {
            leftmostParent = leftmost
            leftmost = leftmost.left
          }

          // parents left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right

          if(parentNode === null) {
            this.root = leftmost
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost
            }
          }
        }
        return true;
      }
    }
  }
}

/* 
      9
  4       20
1   6   15  170
*/

const bst = new BinarySearchTree()
bst.insert(9)
bst.insert(20);
bst.insert(15);
bst.insert(170);
bst.insert(4);
bst.insert(6);
bst.insert(1);
bst.remove(170)
// console.log('lookup/isItExist =', bst.lookup(20))


// console.log(bst)



module.exports = {
  BinarySearchTree,
};