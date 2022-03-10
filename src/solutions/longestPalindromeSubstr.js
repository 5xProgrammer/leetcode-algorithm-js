const assert = require("assert");
/**
 * Given a string s, return the longest palindromic substring in s.
 * @param {*} s
 * @returns
 */
function solution(s) {
  let res = [0, 0]; //start, end
  // substring으로 looping
  for (let i = 0; i < s.length; i++) {
    isPalindrome(i, i, s, res); // palindorme에서 mid가 한개일 때
    isPalindrome(i, i + 1, s, res); // palindrome에서 mid가 두개일 때
  }
  function isPalindrome(start, end, s) {
    //palindrome이 되면 계속 체크해본다
    while (
      start >= 0 &&
      end < s.length &&
      s[start] === s[end]
    ) {
      // 한칸씩 expand.
      start--;
      end++;
    }

    //palindrome이 아니라면, 여태 체크한 길이가 기존의 palindorme과 비교
    if (res[1] - res[0] + 1 < end - start) {
      res = [start + 1, end - 1];
    }
  }
  return s.slice(res[0], res[1] + 1);
}

assert.equal(solution("babad"), "aba");
assert.equal(solution("cbbd"), "bb");
