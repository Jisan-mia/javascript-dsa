// function that calls itself is a recursion function
// recursion function has 2 paths
// 1. recursive case - that is call the function again
// 2. base case - that is stop calling the function

// 3 rules for recursive function
/* 
  i. identify the base case
  ii. identify the recursive case 
  iii. get closer and closer and return when needed. usually you have two returns
*/

let counter = 0
function inception() {
  // base case
  if(counter > 3) {
    return 'done'
  }
  counter++
  // recursive case
  return inception()
}