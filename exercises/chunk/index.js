// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// number 2 is saying how many elements need to be in each chunk.
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


//--------------Solution 1 ----------------///

function chunk(array, size) {
  const chunked = [];

  for ( let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element)
    }
  }
   return chunked
}

module.exports = chunk;

//Steps of solving this problem:

// 1. Create empty array to hold chuncks called "chunked"
// 2. For each element in the unchunked array
// 3. Retrieve the last element in 'chunked'
// 4.  If last element does not exist, or if it's lenght is equal to chunk size
// 5. Push a new chunk into 'chunked' with the current element
// 6. Else add the current element into the chunk
