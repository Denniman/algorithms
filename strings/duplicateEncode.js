/**
 * @description Convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 * @param {string} string
 * @return  string
 */

function duplicateEncode(word) {
  const stringObj = {};
  let result = "";

  const arrayOfString = word.replace(/\s/g, "s").toLowerCase().split("");

  for (const letter of arrayOfString) {
    stringObj[letter] = stringObj[letter] + 1 || 1;
  }

  for (const char of arrayOfString) {
    if (stringObj[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
}

console.log(duplicateEncode("(( @")); // =>  "))(("

console.log(duplicateEncode("din")); //=>  "((("
console.log(duplicateEncode("recede")); // => ()()()
