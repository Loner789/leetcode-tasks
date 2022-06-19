// https://leetcode.com/problems/climbing-stairs/

var climbStairs = function (n) {
  if (n === 0 || n === 1) return n;

  let nums = [1, 2];

  for (let i = 2; i < n; i++) {
    const current = nums[0] + nums[1];
    nums[0] = nums[1];
    nums[1] = current;
  }
  
  return nums[1];
};
