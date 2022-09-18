const myReplace = (str, before, after) => {
  const capitalLetter = `${after[0].toUpperCase()}${after.substring(1)}`;
  const lowerLetter = after.toLowerCase();

  const characterIndex = str.search(before);
  const character = str.charAt(characterIndex);

  if (/[a-z]/.test(character)) {
    return str.replace(before, lowerLetter);
  }

  return str.replace(before, capitalLetter);
};

console.log(
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped")
);
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); //He is Sitting on the couch
console.log(myReplace("His name is Tom", "Tom", "john")); //His name is John
console.log(myReplace("I think we should look up there", "up", "Down")); //I think we should look down there
