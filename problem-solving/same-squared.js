/* 
- Write a function called sameSquared which accepts two arrays
- The function should return true if every value in the first array has it's corresponding value squared in the second array
- The frequency of the values must be the same
- sameSquared([1, 2, 3], [4, 1, 9]) will return true
*/

function sameSquared(firstArr, secondArr) {
  if(!firstArr || !secondArr) return false;
  if(firstArr.length !== secondArr.length) return false;

  const lookup= {};

  for(value of firstArr) {
    lookup[value*value] = (lookup[value*value] || 0) + 1;
  }

  for(secondVal of secondArr) {
    if(!lookup[secondVal]) return false;

    lookup[secondVal] -= 1;
  }
  console.log(lookup)
  return true;
}

const arr1 = [1, 2, 4]
const arr2 = [16, 1, 4]

console.log(sameSquared(arr1, arr2))