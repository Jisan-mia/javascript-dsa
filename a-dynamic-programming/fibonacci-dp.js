// 0 1 1 2 3 5 8 13 21 34 55 89 144 233...
let calculation1 = 0
let calculation2 = 0;

function fibonacci(n) { // O(2^n)
  calculation1++
  if(n < 2) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2)
}

// optimized solution
function memoizedFib() { // O(n)
  let cache = {}

  return function fibonacci(n) {
    calculation2++
    if(cache[n]) {
      return cache[n]
    } else {
      if(n < 2) {
        return n;
      } else {
        cache[n] = fibonacci(n-1) + fibonacci(n-2)
        return cache[n]
      }
    }
  }
}

const optimizedFib = memoizedFib()

console.log(`non-memoized result: ${fibonacci(25)} | calculated ${calculation1} times `)
console.log(
  `memoized result: ${optimizedFib(25)} | calculated ${calculation2} times `
);
