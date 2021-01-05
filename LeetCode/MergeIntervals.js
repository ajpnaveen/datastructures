/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const findOverlap = function (intervals) {
  if (
    (intervals[0][0] <= intervals[1][0] &&
      intervals[0][1] >= intervals[1][0]) ||
    (intervals[0][0] <= intervals[1][1] && intervals[0][1] >= intervals[1][1])
  ) {
    var numArray = [...intervals[0], ...intervals[1]];
    return [Math.min.apply(Math, numArray), Math.max.apply(Math, numArray)];
  } else if (
    (intervals[1][0] <= intervals[0][0] &&
      intervals[1][1] >= intervals[0][0]) ||
    (intervals[1][0] <= intervals[0][1] && intervals[1][1] >= intervals[0][1])
  ) {
    var numArray = [...intervals[0], ...intervals[1]];
    return [Math.min.apply(Math, numArray), Math.max.apply(Math, numArray)];
  }

  return null;
};

var merge = function (intervals) {
  if (intervals.length === 1) {
    return intervals;
  }

  intervals.sort((a, b) => a[0] - b[0]);
  console.log(intervals);

  var length = intervals.length;
  var count = 0;
  while (count < length) {
    if (count + 1 < length) {
      var neighboringArrayElements = intervals.slice(count, count + 2);
      if (neighboringArrayElements.length > 1) {
        var overlap = findOverlap(intervals.slice(count, count + 2));
        if (overlap) {
          intervals[count] = overlap;
          intervals.splice(count + 1, 1);
          count--;
        }
      }
    }

    count++;
  }
  console.log(intervals);
  return intervals;
};

var inval = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

var inval2 = [
  [1, 4],
  [0, 4],
];

var inval3 = [
  [1, 4],
  [0, 0],
];

var inval4 = [
  [1, 4],
  [0, 5],
];

var inval5 = [
  [1, 4],
  [0, 2],
  [3, 5],
];

var inval6 = [
  [2, 3],
  [4, 5],
  [6, 7],
  [8, 9],
  [1, 10],
];

merge(inval6);
