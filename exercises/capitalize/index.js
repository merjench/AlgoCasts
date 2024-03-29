// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// string.prototype.slice()
// it will take some number of elements out of that string. And then there is a optinal second argument
// Ex:
// const word = "there"
//word[0]
// word.slice(1) => will return
//                  T
//                  there

//---------------Solution 2 -------------------------///

function capitalize(str) {
  //create an empty string called result
  // for each character in the string
  //           IF the character to the left a space
  //                capitalize it and add it to "result"
  //           else
  //                add it to 'result'
  // the problem with this solution is it won't capitalize the first character
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i-1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
    return result; 
}



//--------------------Solution 1 ---------------------------//
// function capitalize(str) {
//   //make an empty array 'words'
//   const words = [];
//   //split the input string by spaces to get an array
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1))
//     //give me everything from index one to last word
//   }
//   return words.join(' ');
//   //for each word in the array: Uppercase the first letter of the word,
//   //                            join first letter with the rest of the string,
//   //                            push results into 'words' array
//   // join 'words' into a string and return it
// }




module.exports = capitalize;
