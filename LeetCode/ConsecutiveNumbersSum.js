/**
 * @param {number} N
 * @return {number}
 */
var consecutiveNumbersSum = function (N) {
  var count = 0;

  if (N < 3 || N === 4) {
    return 1;
  }

  for (var i = 1; i <= N / 2; i = i + 2) {
    if (N % i === 0) {
      count++;
    }
  }

  if (N % 2 !== 0) {
    count++;
  }
  console.log(count);
  return count;
};

consecutiveNumbersSum(835066812);
