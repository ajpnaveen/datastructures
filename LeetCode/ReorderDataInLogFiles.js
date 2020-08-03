/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
  return mergeSortStr(
    logs.filter((item) => isNaN(item[item.length - 1]))
  ).concat(logs.filter((item) => !isNaN(item[item.length - 1])));
};

const mergeSortStr = (arr) => {
  if (arr.length == 1) {
    return arr;
  }
  if (arr.length > 1) {
    //Split
    const leftArr = mergeSortStr(arr.slice(0, arr.length / 2));
    const rightArr = mergeSortStr(arr.slice(arr.length / 2, arr.length));

    //Merge
    const mergedArray = [];
    while (leftArr && leftArr.length > 0 && rightArr && rightArr.length > 0) {
      const lStr = leftArr[0];
      const rStr = rightArr[0];

      if (
        lStr
          .substring(lStr.indexOf(" "), lStr.length)
          .localeCompare(rStr.substring(rStr.indexOf(" "), rStr.length)) == 0
      ) {
        if (lStr.localeCompare(rStr) < 1) {
          mergedArray.push(leftArr.shift());
        } else {
          mergedArray.push(rightArr.shift());
        }
      } else if (
        lStr
          .substring(lStr.indexOf(" "), lStr.length)
          .localeCompare(rStr.substring(rStr.indexOf(" "), rStr.length)) < 1
      ) {
        mergedArray.push(leftArr.shift());
      } else {
        mergedArray.push(rightArr.shift());
      }
    }
    return mergedArray.concat(leftArr, rightArr);
  }
};


const logs = [
  "dig1 8 1 5 1",
  "let1 minisota allo",
  "let2 minisota mellow",
  "dig2 4 6",
  "let3 yellow zebra",
  "let4 art can",
  "dig3 3 6",
  "let5 own kit",
  "dig4 3 6",
  "let6 art zero",
];

console.log(reorderLogFiles(logs));