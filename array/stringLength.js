function StringChallenge(str) {
  let strCheck = "abc";
  let count = 0;

  while (str.length > 1) {
    for (let i = 0; i < str.length - 1; i++) {
      const firstChar = str[i];
      const secondChar = str[i + 1];

      if (firstChar === secondChar) {
        count++;
        continue;
      }

      const letterChecked = strCheck
        .replace(firstChar, "")
        .replace(secondChar, "");
      str = `${str.substring(0, i)}${letterChecked}${str.substring(i + 2)}`;
      strCheck = "abc";
      count = 0;
      break;
    }

    if (count + 1 === str.length) return str.length;
  }
  return str.length;
}

console.log(StringChallenge("abcabc")); //2
console.log(StringChallenge("cccc")); //4
