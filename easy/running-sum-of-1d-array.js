// https://leetcode.com/problems/running-sum-of-1d-array/

// First variant of solution
var runningSum = function(nums) {
    let arr = [];
    arr.length === nums.length;
    arr[0] = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        arr[i] = nums[i] + arr[i-1];
    }

    return arr;
};

// Second variant of solution
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }

    return nums;
};

// Second variant of solution
var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i - 1];
    }

    return nums;
};