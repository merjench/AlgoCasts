// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//---------Solution 2 Recursion solution ----------///
//example:
// function printNumber(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n);
//   printNumber (n -1);
// }
//  //call it below:
// //  printNumber(10)
// Recursion Tips
//
// Figure out the bare min pieces of information to represent your problem
// Give reasonable default to the bare min pieces of info
// Check the base case. Is there any work left to do? Of not, return
// Do some work. Call your function again, making sure the arguments have changed in some fashion

function steps(n) {

}



//------------Solution 1 ----------------//
//Solution steps:
//from 0 to n
// create an dempty string 'stair'
// from 0 to n
// IF the current column is equal to or less than the current row
          // add a "#" to "stair"
    //ELSE add a space to 'stair'
// //console log 'stair'
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = "";
//
//     for (let column = 0; column <n; column++) {
//       if (column <= row) {
//         stair += "#";
//       } else {
//         stair += " "
//       }
//     }
//     console.log(stair)
//   }
// }

module.exports = steps;
