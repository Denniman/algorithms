/**
 * @description function that converts a string title and returns the hyphenated version for the URL.
 * @param string {title}
 * @return string
 */

function urlSlug(title) {
  const lowerCaseTitle = title.toLowerCase();

  return lowerCaseTitle
    .split(/\W/)
    .filter((item) => item)
    .join("-");
}

console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));
