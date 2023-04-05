/**
 * Description: Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const searchPositionInput = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target === nums[middle]) {
      return middle;
    } else if (target < nums[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return left;
};

console.log(searchPositionInput([1, 3, 5, 6], 5));
console.log(searchPositionInput([1, 3, 5, 6], 2));
console.log(searchPositionInput([1, 3, 5, 6], 7));
console.log(searchPositionInput([1], 3));
