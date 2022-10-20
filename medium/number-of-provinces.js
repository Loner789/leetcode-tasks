// https://leetcode.com/problems/number-of-provinces/

var findCircleNum = function (isConnected) {
  let visited = new Map();
  let numberOfCities = isConnected.length;
  let provinces = 0;
  for (let i = 0; i < numberOfCities; i++) {
    if (!visited.has(i)) {
      provinces++;
      visit(i);
    }
  }

  function visit(currentCityIndex) {
    for (let i = 0; i < numberOfCities; i++) {
      if (isConnected[currentCityIndex][i] === 1 && !visited.has(i)) {
        visited.set(i, 1);
        visit(i);
      }
    }
  }

  return provinces;
};
