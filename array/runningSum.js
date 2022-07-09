/**
 * @description Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * @param {number[]} nums
 * @return {number[]} number[]
 */

const runningSum = (nums) => {
  const result = [];
  let sum = 0;
  let index = 0;
  while (index < nums.length) {
    sum = sum + nums[index];
    result.push(sum);
    index++;
  }
  return result;
};

console.log(runningSum([1, 2, 3, 4])); //[1,3,6,10]
console.log(runningSum([1, 1, 1, 1, 1])); //[1,2,3,4,5]
