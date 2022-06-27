/**
 @description Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
 @param {n} integers
 @return integers[]
 */

function digitize(n) {
  const result = [];
  const num = n.toString().split("");
  for (let i = num.length - 1; i >= 0; i--) {
    result.push(Number(num[i]));
  }

  return result;
}

console.log(digitize(348597));
//   console.log(digitize([7,9,5,8,4,3]));
