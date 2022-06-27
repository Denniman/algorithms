/**
 *@description There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class. 
You receive an array with your peers' test scores. Now calculate the average and compare your score!
 * @param {*array} classPoints
 * @param {*integer} yourPoints
 * @returns boolean
 */

function betterThanAverage(classPoints, yourPoints) {
  let sum = 0;
  for (let i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
  }
  const result = Math.floor(sum / classPoints.length);
  return yourPoints > result;
}

console.log(betterThanAverage([2, 3], 5));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75)); //true
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)); //false
