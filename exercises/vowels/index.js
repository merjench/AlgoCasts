// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


//----------Regular Expression (regex) Solution 2 --------////

function vowels(str) {

  const matches = str.match(/[aeiou]/gi);
  //g = makes sure we don't stop after the first find but return all
  // i = case incensitive
  return matches ? matches.length : 0;
  //returns null if there is not matches
}

// ----------Itterative Solution 1 -------------///
//
// function vowels(str) {
//     let count = 0;
//     const allVowels = ['a', 'e', 'i', 'o', 'u'];
//     // const allVowels = 'aeiou';
//
//     for (let char of str.toLowerCase()) {
//       //helper method to call all vowels instead of using multiple if statements
//       //.includes method
//       if (allVowels.includes(char)) {
//         count++
//       }
//     }
//     return count
// }

module.exports = vowels;
