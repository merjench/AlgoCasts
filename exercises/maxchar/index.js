// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Some other string questions like this:
// 1. What is the most common character in the string?
// 2. Does string A have the same character as string B (is it an anagram)?
// 3. Does the given string have any repeated characters in it?
          //
//--------------Solution 1 ----------------//

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  
// for of loop is used to itterating through array or a string
  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  // for in loop is used to itterating through object
  // object start's with O so we do not use for of loop

  for (let char in charMap) {
      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
  }
  return maxChar
  // console.log(charMap)
}

module.exports = maxChar;




// function maxChar(str) {
  //   const sentence = "I need a vacation asap!"
  //   const letters = {};
  //
  //   for (let character of sentence) {
    //     if (!letters[character]) {
      //       letters[character] = 1;
      //     } else {
        //       letters[character]++;
        //     }
        //   }
        //   return sentence
        // }
