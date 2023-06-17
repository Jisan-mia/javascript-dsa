// doubly linked list is similar to singly linked list except
// rather than only pointing to the next node also the next node points to the previous node
// in doubly linked lists we can traverse backwards from tail
/* 
  node {
    value: 5,
    next: {
      value: 2,
      next: null,
      prev: {
        value: 5,
        next: ...
      }
    }
  }
*/

class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value) {
    const node = new Node(value)
    this.head = node;
    this.tail = this.head
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode

    this.length++

    return this
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode

    this.length++

    return this;
  }

  insert(index, value) {
    if(index > this.length) {
      return this.append(value)
    }
    const newNode = new Node(value)
    const leader = this.traverseToIndex(index-1)
    const follower = leader.next

    leader.next = newNode
    newNode.next = follower
    newNode.prev = leader
    follower.prev = newNode

    this.length++

    return this
  }

  remove(index) {
     if (index > this.length || index < 0) {
       return "invalid index";
     }
    const leader = this.traverseToIndex(index - 1)
    const unwantedNode = leader.next
    const unwantedNodeFollower = unwantedNode.next
    if(!unwantedNodeFollower) {
      leader.next = null;
    } else {
      leader.next = unwantedNodeFollower;
      unwantedNodeFollower.prev = leader
    }

    if(index == (this.length - 1)) {
      this.tail = new Node(leader.value)
      this.tail.prev = leader.prev
    }
    this.length--
  }

  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while(count !== index) {
      currentNode = currentNode.next
      count++
    }

    return currentNode
  }

  printLists() {
    const arr = []
    let currentNode = this.head
    while(currentNode !== null) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    return arr;
  }
}

/* 
  5 - 15
*/

const myDoublyLinkedList = new DoublyLinkedList(5)
myDoublyLinkedList.append(15)
myDoublyLinkedList.prepend(20)
myDoublyLinkedList.insert(125, 9)
myDoublyLinkedList.insert(2, 3)
myDoublyLinkedList.remove(4)
console.log(myDoublyLinkedList)
console.log(myDoublyLinkedList.printLists())