// create a function that takes two array and 
// returns one sorted array by merging 

const numbers1 = [2, 4, 35, 6]
const numbers2 = [8, 40, 4, 80]
// return = [2, 4, 4, 6, 8, 35, 40, 80]

function mergeSortedArray(arr1, arr2) {
  return arr1.concat(arr2).sort((a,b) => a - b)

}

console.log(mergeSortedArray(numbers1,numbers2))
