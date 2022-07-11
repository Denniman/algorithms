/**
 * @description The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
 * @param nums
 * @return number
 */
//solution not mine
const pivotIndex = (nums) => {
  const total = nums.reduce((a, b) => a + b);

  //accumulator variable
  let totalSum = 0;

  for (let i = 0; i < nums.length; i++) {
    //  the magic number here is the half of the total array value minus current number, which means both sides have the same value combined
    // if the left half is equal our magic number, return the index of the current number
    if ((total - nums[i]) / 2 === totalSum) return i;
    totalSum += nums[i];
  }

  // if we can't meet our condition, return -1
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //Output: 3
// console.log(pivotIndex([1, 2, 3])); //Output: -1
// console.log(pivotIndex([2, 1, -1])); //Output: 0
