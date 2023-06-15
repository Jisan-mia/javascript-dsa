// 1-->10-->5-->15

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }

    this.tail = this.head;
    this.length = 1;
  }

  append(value) { // O(1)
    const newNode = {
      value: value,
      next: null
    }
    this.tail.next = newNode;
    this.tail = newNode

    this.length++
    
    return this
  }

  prepend(value) { // O(1)
    const newNode = {
      value: value,
      next: null
    }

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  printList() {
    const array = []
    let currentNode = this.head
    while(currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  insert(index, value) { // O(n)
    if(index > this.length) {
      return this.append(value)
    }
    const newNode = {
      value: value,
      next: null
    }
    const leader = this.traverseToIndex(index-1)
    const holdingPointer = leader.next

    leader.next = newNode
    newNode.next = holdingPointer

    this.length++
    
    return this.printList
  }

  traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head
    while(count !== index) {
      currentNode = currentNode.next
      count++
    }

    return currentNode
  }

  remove(index) { // O(n)
    if(index > this.length || index < 0) {
      return 'invalid index'
    }
    const leader = this.traverseToIndex(index-1);
    const unwantedNode = leader.next
    leader.next = unwantedNode.next

     if (index === (this.length-1)) {
      this.tail = {
        value: leader.value,
        next: null
      }
     }
    
    this.length--
    return this.printList();
  }
}

/*1   2   3
  x-->x-->x
      x  x
      \ |
       x

        d
  1   2 3 4
  x   x x x
      
*/
const myLinkedList = new LinkedList(10)
myLinkedList.append(5)
myLinkedList.append(15);
myLinkedList.prepend(1)
myLinkedList.insert(1, 11);
myLinkedList.insert(4, 20)
myLinkedList.remove(4)

console.log(myLinkedList)
console.log(myLinkedList.printList())