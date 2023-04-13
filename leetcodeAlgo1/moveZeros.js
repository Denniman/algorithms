/**
 * Description: Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * Note that you must do this in-place without making a copy of the array.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const moveZeros = (nums) => {
  let nonZeroIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== 0) {
      nums[nonZeroIndex] = nums[index];
      nonZeroIndex++;
    }
  }

  for (let j = nonZeroIndex; j < nums.length; j++) {
    nums[j] = 0;
  }
};

const result = [0, 1, 0, 3, 12];
moveZeros(result);
console.log(result);
// // Output: [1,3,12,0,0]

const result3 = [0, 0, 1];
moveZeros(result3);
console.log(result3);
