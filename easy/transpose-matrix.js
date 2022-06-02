// https://leetcode.com/problems/transpose-matrix/

var transpose = function (matrix) {
  const transpose = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const arr = [];

    for (let j = 0; j < matrix.length; j++) {
      arr.push(matrix[j][i]);
    }

    transpose.push(arr);
  }

  return transpose;
};
