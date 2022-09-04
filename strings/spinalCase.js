function spinalCase(str) {
  const splitted = str.split("");

  const result = splitted
    .map((elem) => elem.match(/[A-Z]/).toLowerCase())
    .join("");
  // console.log(splitted.join(""));

  return result;
}

console.log(spinalCase("This Is Spinal Tap"));
