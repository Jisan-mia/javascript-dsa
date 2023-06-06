// creating an array from scratch

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(element) {
    this.data[this.length] = element;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item
  }
  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i+1]
    }

    delete this.data[this.length-1]

    this.length--
  }
}


const myCustomArr = new MyArray();

myCustomArr.push('tesla')
myCustomArr.push('ferrari');
myCustomArr.push('ford')
myCustomArr.push('lamborghini')
myCustomArr.pop()

// myCustomArr.delete(1)


console.log(myCustomArr)
