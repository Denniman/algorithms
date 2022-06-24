/**
 * @description Complete the solution so that the function will break up camel casing, using a space between words.
 * @param {string} string
 * @return {string}
 */

function solution(string) {
  let result = "";
  if (!string) return result;

  for (let i = 0; i < string.length; i++) {
    if (/[A-Z]/.test(string[i])) {
      result = `${string.substring(0, i)} ${string.substring(i)}`;
    } else {
      result += string[i];
    }
  }
  return result;
}

console.log(solution("camelCasing")); //"camel Casing"
console.log(solution("identifier")); //""identifier""
console.log(solution("camelCasingTest")); //
console.log(solution("")); //""
