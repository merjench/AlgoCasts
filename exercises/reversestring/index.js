// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// array.prototype.reverse() => built in function in developer.mozilla.org

function reverse(str) {
  return str.split('').reduce((reversed, character) => {
  return character + reversed;
  }, '');
}


module.exports = reverse;

//----------------Solution 1--------------------------------//////////

// function reverse(string) {
  //   //Step 1. Turn string into an array
  //   const array = string.split('');
  //   // Step 2. call reverse method on the array
  //   array.reverse();
  //   //join the array back into a string and return
  //   return array.join('');
  // }

  ///--------------Solution 2 -------------------------------////
  // function reverse(str) {
    // return str
    //   .split('')
    //   .reverse()
    //   .join('');
    // }


    //----------Solution 3 ------------------------------------///
    // Solution if we can't use the reserve helper

    // function reverse(str) {
    //   //create an empty string called reversed
    //   let reversed = '';
    //   // for each character in the provided string Take the character and add it to the start of "reversed"
    //   // Use the new way of writing (for loop) instead of new way
    //   for (let character of str) {
    //     reversed = character + reversed;
    //   }
    //   // return the variable "reversed"
    //   return reversed
    //
    // }
