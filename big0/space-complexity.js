function foo(n) {
  for(let i = 0; i < n; i++) {
    console.log('foo')
  }
}

foo(5);
// the time complexity of above function is O(n)
// and the space complexity is 
// O(1) because we are not using any data structures, only let = 0 variable which is constant
// thats why space complexity is O(1)


function bar(n) {
  const bars = []

  for(let i = 0; i < n; i++) {
    bars[i] = 'bar'
  }

  return bars;
}

console.log(bar(5))
// the time complexity of bar() function is O(n)
// and the space complexity is also O(n)
// because at `const bars = []` we are creating variable and using array data structures
// inside the loop we're adding 'bar' in every iteration
// so space complexity would be O(n)