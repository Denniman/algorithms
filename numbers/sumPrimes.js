/**
 * @description returns the sum of all prime numbers that are less than or equal to num.
 * @params integer
 * @returns integer
 */

function sumPrimes(num) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) return false;
    }
    return true;
  }

  // Check all numbers for primality
  let sum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) sum += i;
  }
  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));
