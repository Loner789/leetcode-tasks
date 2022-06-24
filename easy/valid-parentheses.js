// https://leetcode.com/problems/valid-parentheses/

// First variant
var isValid = function (s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      let stackItem = stack.pop();

      if (s[i] === ")" && stackItem !== "(") return false;
      if (s[i] === "]" && stackItem !== "[") return false;
      if (s[i] === "}" && stackItem !== "{") return false;
    }
  }
  if (stack.length !== 0) return false;

  return true;
};

// Second variant
var isValid = function (s) {
  let stack = [];
  let template = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") {
      stack.push(s[i]);
    } else if (template[stack.pop()] !== s[i]) {
      return false;
    }
  }

  if (stack.length !== 0) return false;

  return true;
};
