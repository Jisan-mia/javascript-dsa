// creating an array from scratch

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // returns value of the index
  get(index) {
    return this.data[index];
  }

  // adds an element at the end
  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }
  // pops out or removes last item
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  // removes first item 
  shift() {
    const firstItem = this.data[0]
    delete this.data[0]
    this.length--
    return firstItem
  }

  // adds an item in first index {0: 'a', 1: 'b', 2: 'c'}
  unshift(item) {
    let prevItem = this.data[0]
    for (let i = 1; i < this.length+1; i++) {
      const currentItem = this.data[i] // c
      this.data[i] = prevItem; // 1: b
      prevItem = currentItem;  // c
    }
    this.data[0] = item
    this.length++
  }


  // delete an item of specified index
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];

    this.length--;
  }
}


const myCustomArr = new MyArray();

myCustomArr.push('tesla')
myCustomArr.push('ferrari');
myCustomArr.push('ford')
myCustomArr.push('lamborghini')
myCustomArr.pop()

// myCustomArr.delete(1)
// myCustomArr.shift()

myCustomArr.unshift('firstItem')


console.log(myCustomArr)
