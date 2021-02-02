/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var min = prices[0];
  var max = prices[0];
  var outPut = 0;

  prices.forEach((item) => {
    if (item < min) {
      min = item;
      max = min;
    }
    if (item > max) {
      max = item;
    }

    if (outPut < max - min) {
      outPut = max - min;
    }
  });

  console.log(outPut);
  return outPut;
};

var prices = [7, 1, 5, 3, 6, 4];
//prices = [2, 4, 1];
maxProfit(prices);
