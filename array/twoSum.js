/**
 @description Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target
 @params {arr} int[]
 @return number
 */

//  Naive solution
const twoSumNaive = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

// Optimal solution
const twoSum = (nums, target) => {
  const indices = {};

  let index = 0;

  while (index < nums.length) {
    if (target - nums[index] in indices) {
      return [indices[target - nums[index]], index];
    }

    indices[nums[index]] = index;
    index++;
  }

  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 5, 5, 11], 10));
console.log(twoSum([4, 1, 7, 3, 5], 12));
