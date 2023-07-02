// Dynamic programming
// its an optimizing technic 
// by caching something

function memoizedAdd80() {
  let cache = {}

  return function(n) {
    if(n in cache) {
      return cache[n]
    } else {
      console.log('calculating')
      cache[n] = n + 80;
      return cache[n]
    }
  }
}

const add80 = memoizedAdd80()

console.log(add80(10));
console.log(add80(10));
console.log(add80(15));

