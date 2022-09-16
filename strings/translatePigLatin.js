/**
 * @description  If a word begins with a consonant, the function takes the first consonant or consonant cluster, moves it to the end of the word and add 'ay' to it. If a word begins with a vowel, it adds 'way' at the end
 * @param {string} string
 * @return  string
 */

const translatePigLatin = (str) => {
  let lastIndex = 0;
  let result = "";
  const pattern = /^[aeiou]$/i;

  for (let index = 0; index < str.length; index++) {
    if (pattern.test(str[0])) {
      result = `${str.substring(0)}way`;
    }

    if (!pattern.test(str[lastIndex])) {
      lastIndex = index + 1;
      result = `${str.substring(lastIndex)}${str.substring(0, lastIndex)}ay`;
    }
  }

  return result;
};

console.log(translatePigLatin("consonant")); //onsonantcay
console.log(translatePigLatin("california")); //aliforniacay
console.log(translatePigLatin("algorithm")); //algorithmway
console.log(translatePigLatin("paragraphs")); //aragraphspay
console.log(translatePigLatin("schwartz")); //artzschway
