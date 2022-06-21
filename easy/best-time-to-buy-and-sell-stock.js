// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    let profit = prices[i] - minPrice;

    maxProfit = Math.max(maxProfit, profit);
  }

  return maxProfit;
};
