// stack implementation using array

class Stack {
  constructor() {
    this.array = []
  }
 
  peak() {
    return this.array[this.array.length-1]
  }

  push(value) {
    this.array.push(value)
    return this
  }

  pop() {
    this.array.pop()
    return this
  }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('youtube');
myStack.push("linkedin");
myStack.pop();
console.log(myStack.peak());
console.log(myStack)
