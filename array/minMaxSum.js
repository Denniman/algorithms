/**
 @description Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
 @params {arr} integers[]
 @return integers
 */

function miniMaxSum(arr) {
  // Write your code here
  let firstSum = 0,
    secondSum = 0;

  arr.sort((a, b) => a - b);

  for (let i = 1; i < arr.length; i++) {
    firstSum += arr[i];
  }

  for (let i = 0; i < arr.length - 1; i++) {
    secondSum += arr[i];
  }

  const largeSum = Math.max(firstSum, secondSum);
  const smallSum = Math.min(firstSum, secondSum);

  return `${Number(smallSum)} ${Number(largeSum)}`;
}

console.log(miniMaxSum([1, 3, 5, 7, 9])); //16, 24
console.log(miniMaxSum([1, 2, 3, 4, 5])); //10, 14
console.log(miniMaxSum([7, 69, 2, 221, 8974])); //299, 2971
