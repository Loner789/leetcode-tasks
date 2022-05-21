// https://leetcode.com/problems/length-of-last-word/

 var lengthOfLastWord = function(s) {
    let i = s.length - 1;
    while (i >= 0 && s[i] === ' ') {--i};
    let size = 0;
    while (i >= 0 && s[i] !== ' ') {--i, size++};
    return size;
};