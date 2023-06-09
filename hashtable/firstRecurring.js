// create a firstRecurringCharacter function that should
// return the first character that is reoccurred more than one
// if the array item is unique return undefined

// given array = [2, 5, 1, 2, 3, 5, 1, 2, 4]
// it should return 2
// given array = [2, 8, 9, 15]
// ite should return undefined

// approach one
function firstRecurringCharacter(input) {
  for(let i = 0; i < input.length; i++) {
    for(let j = i+1; j < input.length; j++) {
      if(input[j])
      if(input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined;
} // O(n^2)

const numbersArr = [2, 5, 3, 5, 2, 0, 3, 5, 1, 2, 4]
const result = firstRecurringCharacter(numbersArr)
console.log(result)

// approach two
function firstRecurringCharacter2(input) {
  const map = {}
  for(let i = 0; i < input.length; i++) {
    if(map[input[i]]) {
      return input[i]
    } else {
      map[input[i]] = true
    }
  }
  return undefined
} // O(n)
console.log(firstRecurringCharacter2(numbersArr));