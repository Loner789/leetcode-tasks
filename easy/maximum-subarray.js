// https://leetcode.com/problems/maximum-subarray/

// First variant

var maxSubArray = function (nums) {
  let sum = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum = currentSum + nums[i];

    if (currentSum > sum) {
      sum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return sum;
};

// Second variant

var maxSubArray = function (nums) {
  let sum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    sum = Math.max(sum, currentSum);
  }

  return sum;
};
