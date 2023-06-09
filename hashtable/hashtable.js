// creating our own hash table

class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  #hash(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let address = this.#hash(key)
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
   }

  get(key) {
    let address = this.#hash(key)
    const currentBucket = this.data[address]
    if(currentBucket) {
      for(const item of currentBucket) {
        if (item[0] === key) {
          return item[1];
        }
      }
    }   
    return undefined
  }

  keys() {
    const keysArr = [];

    /*  one way
    const flatData = this.data.flat(Infinity)
    for(let i = 0; i < flatData.length; i = i + 2) {
      keysArr.push(flatData[i])
    } 
    */
    for(let i = 0; i < this.data.length; i++) {
      if(this.data[i]) {
        keysArr.push(this.data[i][0][0])
      }
    }
    return keysArr
  }
}

const myHashTable = new HashTable(5)

myHashTable.set('grapes', 1000)
myHashTable.set("apples", 50);
myHashTable.set('oranges', 15)

console.log(myHashTable.get("oranges"));
console.log(myHashTable.keys())