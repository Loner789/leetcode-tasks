// https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function (s) {
  const vowels = 'aeiou';
  let str = s.split('');
  let vowel = (char) => vowels.includes(char.toLowerCase());
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    while (start < end) {
      if (!vowel(str[start])) {
        start++;
      } else break;
    }
    while (start < end) {
      if (!vowel(str[end])) {
        end--;
      } else break;
    }
    let temp = str[start];
    str[start] = str[end];
    str[end] = temp;
    start++;
    end--;
  }

  return str.join('');
};
