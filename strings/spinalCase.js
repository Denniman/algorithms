/**
 * @description Convert a string to all-lowercase-words-joined-by-dashes.
 * @param {string} string
 * @return  string
 */

function spinalCase(str) {
  // This puts a space before any encountered uppercase characters in
  // the string so that the spaces can be replaced by dashes later on
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // the regular expression /\s+|_+/g,  select all white spaces and underscores
  return str.replace(/\s+|_+/g, "-").toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap")); //this-is-spinal-tap
console.log(spinalCase("The_Andy_Griffith_Show")); //the-andy-griffith-show
console.log(spinalCase("Teletubbies say Eh-oh")); //teletubbies-say-eh-oh
console.log(spinalCase("AllThe-small Things")); //all-the-small-things
console.log(spinalCase("thisIsSpinalTap")); //all-the-small-things
