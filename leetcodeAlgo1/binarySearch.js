/**
 @description Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
 If target exists, then return its index. Otherwise, return -1. You must write an algorithm with O(log n) runtime complexity.
* @param {number[]} nums
 @return {number}
 */

const search = (nums, target) => {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer <= rightPointer) {
    const middle = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (target < nums[middle]) {
      rightPointer = middle - 1;
    } else {
      leftPointer = middle + 1;
    }
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([-1, 0, 3, 5, 9, 12], 2));
