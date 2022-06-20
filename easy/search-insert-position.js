// https://leetcode.com/problems/search-insert-position/

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[nums.length - 1] < target) {
      return nums.length;
    } else if (nums[i] >= target) {
      return i;
    }
  }
};
