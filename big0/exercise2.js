function secondFunExercise(input) {
  let a = 1; 
  let b = 10;
  let c = 100;

  for(let i = 0; i < input.length; i++) {
    let x = i + 1;
    let y = i + 2;
    let z = i + 3;
  }
  for(let j = 0; j < input.length; j++) {
    let p = j * 2;
    let q = j * 2;
  }

  let str = 'Hi there'
}

// whats the Big O of the above function? Ans is: Big O(n )

// when calculating Big O these are 4 rules to consider
// 1. Worst Case
    // examples: lets say we have an array of 10 number in random places, we have a function that finds number 7 from the random number array
    // here the worst case is if the number 7 is the last element of the array
    // and the best case is if the number 7 is the first element of the array
// 2. Remove Constants
// 3. Different terms for inputs
// 4. Drop non Dominants