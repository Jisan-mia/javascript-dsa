// give a number N return the index value of the fibonacci sequence, where the sequence is
// n = 2 -> 1


// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ....
// the pattern of teh sequence is that each value is the sum  of the previous 2 values, that means for N=5 --> 3+2

function fibonacciIterative(n) { // O(n)
  const arr = [0,1]
  for(let i = 2; i <= n; i++) {
    arr.push(arr[i-2]+arr[i-1])
  }
  return arr[n]
} 

console.log('iterative: ', fibonacciIterative(8))

function fibonacciRecursive(n)  { // O(2^n)
  if(n < 2) {
    return n
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(2))