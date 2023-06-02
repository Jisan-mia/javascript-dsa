// time complexities for array operations
// lookup or access = O(1)
// push = O(1)
// insert = O(n)
// delete = O(n)

const stringArr = ['a', 'b', 'c', 'd']

// access
stringArr[2] // O(1)

// push
stringArr.push('e') // O(1)

// pop
stringArr.pop() // O(1)

// unshift
stringArr.unshift('x') // O(n) - since unshift method add an item on first index, so all other items being re indexed

// splice
stringArr.splice(3, 0, 'y') // O(n)



console.log(stringArr)