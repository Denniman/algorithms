const bubbleSort = (arr) => {
  let noSwap;
  for (let i = 0; i < arr.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }

    if (noSwap) break;
  }
  return arr;
};

// console.log(bubbleSort([2, 1, 4, 5, 3]));
console.log(bubbleSort([5, 1, 2, 3, 4]));
