'use strict';

// const fs = require('fs');
//
// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
//
// let inputString = '';
// let currentLine = 0;
//
// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });
//
// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');
//
//     main();
// });
//
// function readLine() {
//     return inputString[currentLine++];
// }

//-----------Repl Testing --------------------------------////////////////

var array = [5,2,7,8,-2,25,25], 
  newArray = [];

for(var i=0; i < array.length; i++) {
    var max = Math.max.apply(null, array), min = Math.min.apply(null, array);
    array.splice(array.indexOf(max), 1);
    array.splice(array.indexOf(min), 1);
    newArray.push(max, min);
}
if (array.length) newArray.push(array.pop());

console.log(newArray);

///-------------------------------------------------------------------




/////////---------------------Solution------------------------////////
/*
 * Complete the 'meanderingArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY unsorted as parameter.
 */

 function meanderingArray(unsorted) {
    // Write your code here
    var newArray = [];
    while(unsorted.length > 1) {
        var max = Math.max.apply(null, unsorted), min = Math.min.apply(null, unsorted);
        unsorted.splice(unsorted.indexOf(max), 1);
        unsorted.splice(unsorted.indexOf(min), 1);
        newArray.push(max, min);
    }

    if (unsorted.length) newArray.push(unsorted.pop());

        return newArray
//---------------------------------------------------------------------------------------



//
// function main() {
//     const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
//
//     const unsortedCount = parseInt(readLine().trim(), 10);
//
//     let unsorted = [];
//
//     for (let i = 0; i < unsortedCount; i++) {
//         const unsortedItem = parseInt(readLine().trim(), 10);
//         unsorted.push(unsortedItem);
//     }
//
//     const result = meanderingArray(unsorted);
//
//     ws.write(result.join('\n') + '\n');
//
//     ws.end();
// }
