// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  //implement bubbleSort
  // use classic for loop and the write inner for loop
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i -1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
 // return the sorting array
 return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr
}

// ------------------Recursion use for Solution ----------------///
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));

}

function merge(left, right) {
  //create results array
  const results = []
//while there are still elements in both arrays
  while (left.length && right.length) {
    //if the first element the left half is less than firsst in right half
    if (left[0] < right[0]) {
      //shift the element from left into a 'results' arr
      results.push(left.shift());
    } else {
      //'shift' the element from right into a 'results' arr
      results.push(right.shift())
    }
  }
//take everything from the array that still has stuff in it and put it in results
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
