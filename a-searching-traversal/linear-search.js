// linear search algorithm

const cars = ['ford', 'ferrari', 'tesla', 'primo', 'audi']

function linearSearch(array, target) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === target) {
      return [i, array[i]]
    }
  }
  return false
}

console.log(linearSearch(cars, 'tesla'))

// other built in searching methods in javascript
console.log(cars.indexOf("ford"));

console.log(cars.findIndex((item) => item === 'ferrari'))

console.log(cars.includes('primo'))

console.log(cars.find(item => item === 'tesla'))