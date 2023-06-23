// write function that finds the factorial of any number
// factorial 3! = 3 * 2 * 1 = 6
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function factorialIterative(number) {
  let result = 1;
  for(let i = 1; i <= number; i++) {
    result = result * i
  }

  return result;
}

 console.log(factorialIterative(5))

function factorialRecursive(number) {
  if(number < 2) {
    return number
  }
  return number * factorialRecursive(number-1)
}
console.log("recursive", factorialRecursive(5));