// https://leetcode.com/problems/roman-to-integer/

var romanToInt = function (s) {
  const converter = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  s = s.replace("IV", "IIII").replace("IX", "VIIII");
  s = s.replace("XL", "XXXX").replace("XC", "LXXXX");
  s = s.replace("CD", "CCCC").replace("CM", "DCCCC");

  for (let i = 0; i < s.length; i++) {
    result += converter[s[i]];
  }

  return result;
};
