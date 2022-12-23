/**
 * @description Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
  const hashmap = {};

  for (let index = 0; index < nums.length; index++) {
    hashmap[nums[index]] ? hashmap[nums[index]]++ : (hashmap[nums[index]] = 1);
  }

  return Object.values(hashmap).some((elem) => elem >= 2);
};

console.log(containsDuplicate([1, 2, 3, 1])); //true
console.log(containsDuplicate([1, 2, 3, 4])); //false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); //true
