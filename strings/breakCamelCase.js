/**
 * @description Complete the solution so that the function will break up camel casing, using a space between words.
 * @param {string} string
 * @return  string
 */

const solution = (string) => {
  let result = "";
  let lastIndex = 0;

  for (let index = 0; index < string.length; index++) {
    const char = string[index];

    if (/[A-Z]/.test(char)) {
      const word = string.substring(lastIndex, index);
      result += word + " ";
      lastIndex = index;
    }

    if (index === string.length - 1) {
      const word = string.substring(lastIndex, index + 1);
      result += word;
    }
  }

  return result;
};

console.log(solution("camelCasing"));
console.log(solution("identifier"));
console.log(solution("solutionTestCase"));
console.log(solution("")); //""
console.log(solution("dennisTerna"));
