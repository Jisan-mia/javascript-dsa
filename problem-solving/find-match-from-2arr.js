// given two array of string to a function that should return true if two array contains at leas one matching item else return false

const array1 = ['a', 'd', 'y', 'x']
const array2 = ['m', 'z', 'a']
// the above two array should return true since x is common in both array

function findCommonFrom2Array(arr1, arr2) {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) {
      if(arr1[i] == arr2[j]) {
        return true
      }
    }
  }
  return false
}

// O(a*b) time complexity
// O(1) space complexity

console.log(findCommonFrom2Array(array1, array2))

// approach 2: a better solution of the problem
// if we use hash table or object  in javascript

function findCommonFrom2Array2(arr1, arr2) {
  // first from arr1 we create a new object where all the properties will be equal to arr1 item
  const map = {}; // {a: true, d: true, ..}
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      map[arr1[i]] = true;
    }
  }

  // then loop over the second array(arr1) and check if arr2 items already contains in the object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }

  return false;
}

// O(a+b) time complexity
// O(n) space complexity

console.log(findCommonFrom2Array2(array1, array2))


// approach 3: another easily readable solution in javascript es6 array.some() method
function findCommonFrom2Array3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item))
}

console.log(findCommonFrom2Array3(array1, array2))