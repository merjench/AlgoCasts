// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

///______________________Solution 1 ________________________________//

// function anagrams(stringA, stringB) {
//   //build helper functions vs character map
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
// // next step. pull out all the keys and count the number of keys each string contains
// // Ex: const obj = { a:1, b:1, c:1 }
// //     object.keys(obj).length;
//
//     if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//       return false;
//     }
// // itterate over it
//     for (let char in aCharMap) {
//       if (aCharMap[char] !== bCharMap[char]) {
//         return false;
//       }
//     }
//       return true;
// }
//
//   function buildCharMap(str) {
//     const charMap = {};
//
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//       charMap[char] = charMap[char] + 1 || 1;
//     }
//
//     return charMap
//
//   }

//________________Solution 2___________________________///////////

  function anagrams(stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)

  }

  function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').join('');
  }

module.exports = anagrams;


//Example:
// const word = "HI THERE!!!!"
//word.replace(/[^\w]/g. "").loLowerCase();
// => hithere -----------/// removes everythig other than the actual letters

//Another Example:
// const numbers = [10, 30, 5, -90, 50]
// numbers.sort()  => will sort the characters "meaningfully"
// same can be used to sort with characters and it will sort them alphabetically
