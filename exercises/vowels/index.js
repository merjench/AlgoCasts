// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// ----------Itterative Solution 1 -------------///

function vowels(str) {
    let count = 0;
    const allVowels = ['a', 'e', 'i', 'o', 'u'];
    // const allVowels = 'aeiou';

    for (let char of str.toLowerCase()) {
      //helper method to call all vowels instead of using multiple if statements
      //.includes method
      if (allVowels.includes(char)) {
        count++
      }
    }
    return count
}

module.exports = vowels;
