const numbers = [99, 44, 9, 2, 1, 5, 63, 87, 283, 4, 0]

function selectionSort(arr) { // O(n^2)
  const len =  arr.length;
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr;
}

console.log(selectionSort(numbers))