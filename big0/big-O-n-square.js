// log all pairs of array
const numbers = [1,2,3,4,5]

function logAllPairs(array) {
  const pairs = []
  for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array.length; j++) {
      pairs.push([array[i], array[j]])
    }
  }
  return pairs;
}

console.log(...logAllPairs(numbers))

// whats the big O here
// its big O(n²)
// because, when there is nested loop we don't add like O(n+n)
// we multiply like O(n*n)