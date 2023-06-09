/* 
- Write a function called isAnagram which accepts two strings
- The function should return true if the two strings parameters are anagrams of each other
- isAnagram("silent", "listen"); // true
*/

function isAnagram(firstStr, secondStr) {
  if(!firstStr || !secondStr) return false;
  if(firstStr.length !== secondStr.length) return false;
  const lookup = {}
  
  for(first of firstStr) {
    lookup[first] = lookup[first] + 1 || 1
  }
  
  for (second of secondStr) {
    if (!lookup[second]) return false;
    lookup[second] -= 1;
  }
  console.log(lookup);

  return true
}

const str1 = 'silent'
const str2 = 'listen'

console.log(isAnagram(str1, str2))