// selection sort algorithm works by scanning a list of items for the smallest element 
// and then swapping the element for the one in first position


const numbers = [99, 44, 9, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(arr) {
  const len = arr.length;
  for(let i = 0; i < len; i++) {
    // set current index as minimum
    let min = i;
    let temp = arr[i]
    for(j = i+1; j < len; j++) {
      if(arr[j] < arr[min]) {
        // update minimum if current is lower that what we had previously
        min = j;
      }
    }
    arr[i] = arr[min]
    arr[min] = temp
  }

  return arr;
}

console.log(selectionSort(numbers));