/**
 * @description Given a positive integer num, this function returns the sum of all odd Fibonacci numbers that are less than or equal to num
 * @params integer
 * @returns integer
 */

function sumFibs(num) {
  let sum = 0;
  let prevNumber = 0,
    currNumber = 1;

  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      sum += currNumber;
    }
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return sum;
}

console.log(sumFibs(10)); //should return 5
console.log(sumFibs(4)); //should return 5
console.log(sumFibs(1)); //should return 5
console.log(sumFibs(1000)); //should return 1785
