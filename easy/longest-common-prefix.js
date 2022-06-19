// https://leetcode.com/problems/longest-common-prefix/

var longestCommonPrefix = function (strs) {
  const firstWord = strs[0];
  let commonPref = "";

  for (let i = 0; i < firstWord.length; i++) {
    if (strs.every((item) => item[i] === firstWord[i])) {
      commonPref += firstWord[i];
    } else {
      break;
    }
  }

  return commonPref;
};
