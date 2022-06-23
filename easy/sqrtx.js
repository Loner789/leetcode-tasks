// https://leetcode.com/problems/sqrtx/

var mySqrt = function (x) {
  if (x === 0) return 0;

  if (x < 4) return 1;

  for (let i = 2; i < x; i++) {
    if (x === i * i) return i;

    if (x < i * i) return i - 1;
  }
};
