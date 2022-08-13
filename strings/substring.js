// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

/**
 * @description Given a string s, find the length of the longest substring without repeating characters.
 * @author Dennis Terna
 * @param {s} string
 * @return  integer
 */
const lengthOfLongestSubstring = (s) => {
  const obj = {};
  let longestStr = 0;

  for (let i = 0; i < s.length; i++) {
    if (!obj[s[i]]) {
      obj[s[i]] = 1;
      longestStr++;
    }
  }

  return longestStr;
};

// TODO
// Refactor this challenge to pass all test cases

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
