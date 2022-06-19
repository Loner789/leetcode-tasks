// https://leetcode.com/problems/palindrome-number/

var isPalindrome = function (x) {
  if (x.length === 0 || x < 0) return false;

  let i = String(x).split("").reverse().join("");

  if (x == i) return true;
  else return false;
};