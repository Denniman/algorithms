/**
 * @description In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * @param {string} string
 * @return  string
 */

function alphabetPosition(text) {
  const str = text.replace(/[^a-z]/gi, "").toLowerCase();
  const stringArr = str.split("");
  const alphabetObj = {};
  let count = 1;
  let result = "";

  for (let index = 97; index <= 122; index++) {
    alphabetObj[String.fromCharCode(index)] = count;
    count++;
  }

  for (let index = 0; index < stringArr.length; index++) {
    const char = stringArr[index];
    const key = alphabetObj[char];
    result += `${key} `;
  }

  return result.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
console.log(alphabetPosition("The narwhal bacons at midnight."));
