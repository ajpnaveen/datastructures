/**
 * @param {string} s
 * @return {number}
 */

var memo = new Map();

var recursiveWithMemo = function (index, str) {
  console.log(`${index} ${str}`);
  if (index === str.length) {
    return 1;
  }

  if (str[index] === "0") {
    return 0;
  }

  if (index === str.length - 1) {
    return 1;
  }

  if (memo.get(index)) {
    return memo.get(index);
  }

  var ans = recursiveWithMemo(index + 1, str);
  if (parseInt(`${str[index]}${str[index + 1]}`) <= 26) {
    ans += recursiveWithMemo(index + 2, str);
  }

  memo.set(index, ans);
  return ans;
};

var numDecodings = function (s) {
  if (s === null || s.length === 0) {
    return 0;
  }
  var ans = recursiveWithMemo(0, s);
  console.log(`the answer is ${ans}`);
  return ans;
};

numDecodings("226");
