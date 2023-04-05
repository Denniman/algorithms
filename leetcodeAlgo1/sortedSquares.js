/**
 * Description: Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
 * @param {number[]} nums
 * @return {number[]}
 */

const naivSortedSquares = (nums) => {
  const result = [];
  for (let index = 0; index < nums.length; index++) {
    result.push(nums[index] ** 2);
  }
  return result.sort((a, b) => a - b);
};

const sortedSquares = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  const result = new Array(nums.length);
  for (let index = nums.length - 1; index >= 0; index--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[index] = nums[right] ** 2;
      right--;
    } else {
      result[index] = nums[left] ** 2;
      left++;
    }
  }
  return result;
};

console.log(sortedSquares([-7, -3, 2, 3, 11]));
console.log(sortedSquares([-4, -1, 0, 3, 10, 12]));

// Input: nums = [-7,-3,2,3,11]
// Output: [ 0, 1, 9, 16, 100 ]
//16,1,0,9,100]

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
