function findMinAndRemoveSorted(array) {
  return array.shift();
}

function merge(array1, array2) {
  let sorted = [];
<<<<<<< HEAD
  while (array1.length !== 0 && array2.length !== 0) {
    if (array1[0] < array2[0]) {
      sorted.push(findMinAndRemoveSorted(array1));
    } else {
      sorted.push(findMinAndRemoveSorted(array2));
    }
  }
  return sorted.concat(array1).concat(array2);
}

function mergeSort(array) {
  let midpoint = array.length/2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);
  let sorted;
  if (array.length < 2) {
    return array;
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  return sorted;
=======
  let min;
  while (array1 !== 0 && array2 !== 0) {
    let firstHalfMin = findMinAndRemoveSorted(array1);
    let secondHalfMin = findMinAndRemoveSorted(array2)
    if (firstHalfMin > secondHalfMin) {
      min = firstHalfMin; 
    } else {
      min = secondHalfMin
    }
    sorted.push(min);
  }
  return sorted.concat(array1).concat(array2);
>>>>>>> 101afd3e019a1b0808bf934fd2229284f4f2f670
}