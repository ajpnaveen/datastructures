/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //intervals.forEach((val, index) => {
  //  console.log(val);
  //});

  //console.log(intervals);
  //while (intervals.next) {
  //  console.log(intervals);
  //}

  //intervals.splice(1, 2);

  //for (let val in intervals) {
  //  console.log(intervals[val]);
  //}

  //console.log(intervals);
  //for (var i = 0; i < intervals.length; i++) {
  //  if (i + 1 < intervals.length) {
  //    if (
  //      intervals[i][0] <= intervals[i][1] &&
  //      intervals[i + 1][0] <= intervals[i + 1][1]
  //    ) {
  //      if (intervals[i][1] <= intervals[i + 1][0]) {
  //        intervals[i] = [intervals[i][0], intervals[i + 1][1]];
  //        i++;
  //      }
  //    }
  //  }
  //}

  //console.log(intervals);

  //console.log(intervals[0][0]);
  //console.log(intervals[1][0]);
  //console.log(intervals[2][0]);
  //console.log(intervals[3][0]);

  console.log(intervals);

  var length = intervals.length;
  var count = 0;

  while (count < length) {
    //console.log(intervals[count]);

    if (count + 1 < length) {
      if (intervals[count][1] >= intervals[count + 1][0]) {
        intervals[count][1] = intervals[count + 1][1];
        intervals.splice(count + 1, 1);
        length--;
      }

      //if (intervals[count][0] <= intervals[count][1]) {
      //  if (intervals[count + 1][0] <= intervals[count + 1][1]) {
      //    if (intervals[count][0] <= intervals[count + 1][1]) {
      //      intervals[count][1] = intervals[count + 1][1];
      //      intervals.splice(count + 1, 1);
      //      length--;
      //    }
      //  }
      //}
    }

    count++;
  }

  //console.log(intervals);
  return intervals;
};

var inval = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

merge([
  [1, 4],
  [4, 5],
]);
