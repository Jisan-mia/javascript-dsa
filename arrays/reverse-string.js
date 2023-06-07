// create a function that reverse a string
// input = 'hello'
// output = 'olleh'


function reverseString1(str) {
  // check input
  if(!str || str.length < 2 || typeof str !== 'string') return 'enter valid string'  

  let reversedStr = ''
  for(let i = str.length-1; i >= 0; i--) {
    reversedStr+=str[i]
  }

  return reversedStr;
}


function reverseString(str) {
  return str.split('').reverse().join('')
}

console.log(reverseString1("jisan"));
console.log(reverseString("hello"));