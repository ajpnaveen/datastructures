/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var length = s.length;
  var index = 0;
  var val = "";
  var arrMap = new Map();
  var count = 0;
  var max = 0;
  var startIndex = 0;
  var counter = 0;

  while (index < length) {
    val = s[index];
    if (arrMap.has(val)) {
      arrMap.clear();
      count = 0;
      index = startIndex;
    } else {
      if (arrMap.size === 0) {
        startIndex = index;
      }
      arrMap.set(val, 1);
      count++;
      if (max < count) {
        max = count;
      }
    }
    counter++;
    index++;
  }
  return max;
};

lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("dvdf");
lengthOfLongestSubstring("pwwkew");
