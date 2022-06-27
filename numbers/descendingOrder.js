/**
 * @description Your task is to make a function that can take any non-negative integer as an argument
 * and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
 * @params {}
 * @returns integer
 */

function descendingOrder(n) {
  const arrStr = n.toString().split("");
  arrStr.sort((a, b) => b - a);
  const result = arrStr.join("");
  return Number(result);
}

console.log(descendingOrder(42145)); //54421
console.log(descendingOrder(145263)); //654321
