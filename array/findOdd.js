/**
 * @description Given an array of integers, find the one that appears an odd number of times. There will always be only one integer that appears an odd number of times.
 * @param {int} integer
 * @return  integer
 */

function findOdd(A) {
  const hashmap = {};
  for (const el of A) {
    hashmap[el] = hashmap[el] + 1 || 1;
  }

  for (const [key, val] of Object.entries(hashmap)) {
    if (val % 2 !== 0) {
      return Number(key);
    }
  }
}

console.log(findOdd([1, 1, 2]));
console.log(findOdd([7]));
console.log(findOdd([0, 1, 0, 1, 0]));
