// queue implementation using linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peak() {
    return this.first
  }

  enqueue(value) {
    const newNode = new Node(value)
    if(this.length === 0) {
      this.first = newNode;
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.length++
    return this
  }

  dequeue() {
    if(!this.first) {
      return null
    }

    if(this.first === this.last) {
      this.last = null
    }

    const holdingPointer = this.first
    this.first = this.first.next

    this.length--
  }

  isEmpty() {
    return this.first === null
  }
}

const myQueue = new Queue()
myQueue.enqueue('sakib')
myQueue.enqueue("jisan");
myQueue.enqueue("porag");
myQueue.enqueue("shawon");
myQueue.dequeue()
myQueue.dequeue();

console.log(myQueue.isEmpty())
console.log(myQueue)