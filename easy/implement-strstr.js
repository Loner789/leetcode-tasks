// https://leetcode.com/problems/implement-strstr/

// First variant
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  return haystack.indexOf(needle);
};

// Second variant
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  let left = 0;
  let right = needle.length;

  while (left < haystack.length) {
    let str = haystack.slice(left, right);
    if (str === needle) {
      return left;
    } else {
      left++;
      right++;
    }
  }

  return -1;
};
