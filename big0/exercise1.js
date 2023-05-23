function anotherFunction() {}

function myFunction(input) {
  let a = 1; // O(1)
  a = 50 + 5; // O(1)

  for (let i = 0; i < input.length; i++) { // O(n)
    anotherFunction(); // O(n)
    const item = input[i]; // O(n)
    a++; // O(n)
  }

  return a; // O(1)
}

// whats the big O of my function
// 1 + 1 + n + n + n + n +1
// 3 + 4n
// O(3 + 4n)
// O(n)