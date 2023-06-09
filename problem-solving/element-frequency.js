/* Checking Frequency of Elements
Write a function checkFrequency to check frequency of each element in an array; 
*/

function checkFrequency(arr) {
  const frequencyMap = {}

  for(elm of arr) {
    frequencyMap[elm] = frequencyMap[elm] + 1 || 1
  }

  return frequencyMap
}

console.log(checkFrequency([5, 2, 1, 8, 2, 9, 2, 5]))