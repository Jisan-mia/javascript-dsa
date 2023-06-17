// stacks is a linear data structure
// we can compare this data structure with a stack or pile of plates where one plate sitting on top of another plate
// and we can only access the top plate
// stack works the same, the process called LIFO(Last In First Out)
// because the last item that comes in, it's the first one that comes out

/* Popular methods of Stack
- lookup O(n)
- push  O(1)
- pop O(1)
- peek O(1)
*/

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peak() {
    return this.top
  }

  push(value) {
    const newNode = new Node(value);
    if(this.length === 0) {
      this.top = newNode
      this.bottom = newNode
    } else {
      const holdingPointer = this.top
      this.top = newNode
      this.top.next = holdingPointer
    }

    this.length++
    return this
  }

  pop() {
    if(!this.top) {
      return null
    }
    if(this.top === this.bottom) {
      this.bottom = null
    }

    const holdingPointer = this.top
    this.top = this.top.next
    this.length--
    return holdingPointer;
  }

  printList() {
    const array = []
    let currentNode = this.top
    
    while(currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }
}

const myStack = new Stack()
myStack.push('google')
myStack.push('facebook');
myStack.push('youtube');
myStack.push('linkedin');
myStack.pop()
myStack.pop();  


console.log(myStack.peak())
console.log(myStack)
// console.log(myStack.printList());
