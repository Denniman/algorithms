// Given two crystal balls that will break if dropped from high enough distance,
// determine the exact spot in which it will break in the most optimized way

const twoCrystalBall = (arr) => {
  const jumpAmount = Math.floor(Math.sqrt(arr.length));

  let i = jumpAmount;
  console.log("One", i);
  for (; i < arr.length; i += jumpAmount) {
    if (arr[i]) {
      break;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < arr.length; ++j, ++i) {
    if (arr[i]) return i;
  }

  return -1;
};

console.log(twoCrystalBall([false, false, false, true, true, true, true]));
