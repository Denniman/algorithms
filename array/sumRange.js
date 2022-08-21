/**
 @description a function that sums two numbers plus the sum of all the numbers between them
 @params {arr} integers[]
 @return  integer
 */

function sumAll(arr) {
  let lowestVal = Math.min(...arr);
  const highestVal = Math.max(...arr);
  let sum = 0;

  for (let i = lowestVal; i <= highestVal; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumAll([4, 9, 10]));
