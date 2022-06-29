// https://leetcode.com/problems/merge-sorted-array/

var merge = function (nums1, m, nums2, n) {
  let i = nums1.length - 1;

  for (let val of nums2) {
    nums1[i] = val;
    i--;
  }

  return nums1.sort((a, b) => a - b);
};
