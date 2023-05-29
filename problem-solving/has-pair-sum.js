// given an array and a sum to a function, return true if any of the pair of the array addition matches the targeted sum

const array = [2, 5, 9, 3, 1] 

function hasPairSum(arr, targetedSum) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === targetedSum) {
        return true;
      }
    }
  }
  return false
}
// O(n^2) time complexity

console.log(hasPairSum(array, 10));


// better approach
// sum - arr[i]
// 8 - 1 = 7
// 8 - 3 = 5
// 8 - 4 = 4
// 8 - 5 = 3
// 8 - 2 = 6

function hasPairSum2(arr, targetedSum) {
  const set = new Set();
  const len = arr.length;

  for(let i = 0; i < len; i++) {
    if(set.has(arr[i])) {
      console.log(arr[i])
      return true;
    }
    set.add(targetedSum - arr[i])
  }
  console.log(set)

  return false

}

console.log(hasPairSum2([1, 3, 4, 5, 2], 8));