/**
 * @description function to split str into an array of words. The function should return the array
 * @param str
 * @return array
 */

function splitify(str) {
  // /\W/ Matches any non-word character.
  return str.split(/\W/);
}

console.log(splitify("Hello World,I-am code"));
// console.log(splitify("This.is.a-sentence"));
