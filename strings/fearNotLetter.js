/**
 * @description Finds the missing letter in the passed letter range and return it.
 * @param {string} string
 * @return  string
 */

function fearNotLetter(str) {
  for (let index = 0; index < str.length; index++) {
    const strCode = str.charCodeAt(index);

    if (strCode !== str.charCodeAt(0) + index) {
      return String.fromCharCode(str.charCodeAt(0) + index);
    }
  }
}

// console.log(fearNotLetter("abce")); //d
// console.log(fearNotLetter("abcdefghjklmno")); //i
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); //undefined
console.log(fearNotLetter("bcdf")); //e
