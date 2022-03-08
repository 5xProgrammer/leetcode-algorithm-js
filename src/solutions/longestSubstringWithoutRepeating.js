const assert = require("assert");

/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * @param {string} s consists of English letters, digits, symbols and spaces.
 */

function solution(s) {
  let left,
    answer = 0;
  const map = new Map();
  for (let right in s) {
    right = Number(right);
    if (map.has(s[right]))
      left = Math.max(left, map.get(s[right]) + 1);
    answer = Math.max(answer, right - left + 1);
    map.set(s[right], right);
  }
}

assert.equal("abcabcbb", 3);
assert.equal("bbbbb", 1);
assert.equal("pwwkew", 3);
