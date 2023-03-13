/**
 * @description A pangram is a sentence that contains every single letter of the alphabet at least once.  For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
 * @param {string} string
 * @return  boolean
 */

// OPTIMAL SOLUTION
function isPangram(string) {
  const char = string.replace(/[^a-z]/gi, "").toLowerCase();
  const alphabetsObj = {};
  const stringObj = {};

  for (let index = 97; index <= 122; index++) {
    alphabetsObj[String.fromCharCode(index)] = 1;
  }

  for (const letter of char) {
    stringObj[letter] = stringObj[letter] + 1 || 1;
  }

  for (const letter of Object.keys(alphabetsObj)) {
    if (!stringObj[letter]) return false;
  }

  return true;
}

// NAIVE SOLUTION
// function naiveisPangram(string) {
//     const lowerStr = string.toLowerCase();

//     const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

//     for (let index = 0; index < alphabets.length; index++) {
//       if (lowerStr.indexOf(alphabets[index]) < 0) {
//         return false;
//       }
//     }

//     return true;
//   }

console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));
