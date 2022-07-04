// https://leetcode.com/problems/relative-ranks/

var findRelativeRanks = function (score) {
  let newScore = [], output = [];

  for (let i = 0; i < score.length; i++) {
    newScore.push(score[i]);
  }

  newScore.sort((a, b) => b - a);

  for (let i = 0; i < score.length; i++) {
    let place = newScore.indexOf(score[i]) + 1;

    if (place == 1) {
      output.push("Gold Medal");
    } else if (place == 2) {
      output.push("Silver Medal");
    } else if (place == 3) {
      output.push("Bronze Medal");
    } else {
      output.push(place.toString());
    }
  }

  return output;
};
