// Return true if the string in the first element of
// the array contains all of the letters of the string
// in the second element of the array. For example, ["hello", "Hello"],
// should return true because all of the letters in the second string are
// present in the first, ignoring case.

// function mutation(arr) {
//   const [firstEl, secondEl] = arr;
//   const elOne = firstEl.toLowerCase();
//   const elTwo = secondEl.toLowerCase();
//   for (let i = 0; i < elTwo.length; i++) {
//     if (elOne.indexOf(elTwo[i]) < 0) {
//       return false;
//     }
//   }
//   return true;
// }

function mutation(arr) {
  const [firstEl, secondEl] = arr;
  const elOne = firstEl.toLowerCase();
  const elTwo = secondEl.toLowerCase();
  const obj = {};
  for (let i = 0; i < elTwo.length; i++) {
    obj[elTwo[i]] = obj[elTwo[i]] ? obj[elTwo[i]] + 1 : 1;
  }

  for (let i = 0; i < elOne.length; i++) {
    if (obj[elOne[i]]) {
      delete obj[elOne[i]];
    }
  }
  return Object.keys(obj).length ? false : true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "Hello"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
console.log(mutation(["Alien", "line"]));
