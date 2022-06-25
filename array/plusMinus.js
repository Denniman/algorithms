/**
 @description Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
 @params {arr} integers[]
 @return floating integers
 */

function plusMinus(arr) {
  let negativeInt = 0,
    positiveInt = 0,
    zeroInt = 0,
    count = 0;

  while (count < arr.length) {
    if (arr[count] >= 1) {
      positiveInt += 1;
    } else if (arr[count] <= -1) {
      negativeInt += 1;
    } else {
      zeroInt += 1;
    }

    count++;
  }

  const positiveRatio = positiveInt / arr.length;
  const negativeRatio = negativeInt / arr.length;
  const zeroIntRatio = zeroInt / arr.length;

  const positiveResult = positiveRatio.toFixed(6);
  const negativeResult = negativeRatio.toFixed(6);
  const zeroResult = zeroIntRatio.toFixed(6);
  console.log(positiveResult, "\n", negativeResult, "\n", zeroResult);
}

console.log(plusMinus([1, 1, 0, -1, -1]));
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));
