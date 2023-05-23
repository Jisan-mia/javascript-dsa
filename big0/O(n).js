// big O is a concept we use to measure how long our algorithm takes to run
// between two functions we can find which function scales or takes less time to run by big O
// for nth element or array size how many operation has to perform by the function/algorithm. there we can find big O result

const tesla = ['tesla']
const largeTesla = new Array(10000).fill('tesla')

function findTesla(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 'tesla') {
      // code
      // console.log(array[i])
    }
  }

}

findTesla(largeTesla)
// where what is the big O notation of findTesla() function
// it is big O(n) because in the function the number of operation increases in linear time as the number of inputs array size increase