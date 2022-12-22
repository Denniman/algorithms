// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Bubble sort
const moveZeroes = (nums) => {
  let noSwaps;
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  };
  for (let i = nums.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (nums[j] == 0) {
        swap(nums, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return nums;
};

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

const myArray = [0, 1, 0, 3, 12, 0];
function moveZerosToEnd(arr) {
  let nonZeroIndex = 0;

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== 0) {
      arr[nonZeroIndex] = arr[index];
      nonZeroIndex++;
    }
  }

  for (let index = nonZeroIndex; index < arr.length; index++) {
    arr[index] = 0;
  }

  return arr;
}

console.log(moveZerosToEnd(myArray));
console.log(moveZerosToEnd([0]));
