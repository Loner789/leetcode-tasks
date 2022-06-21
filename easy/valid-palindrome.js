// https://leetcode.com/problems/valid-palindrome/

// First variant
var isPalindrome = function (s) {
  const a = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const b = a.split("").reverse().join("");

  if (a == b) {
    return true;
  } else {
    return false;
  }
};

// Second variant
var isPalindrome = function (s) {
  const lowerCase = s.toLowerCase();
  const word = lowerCase.replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) return false;

    left++;
    right--;
  }

  return true;
};
