//const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 5, 4, 2, 3];
//const input = [4, 2, 3];

/**
 * @param {number[]} height
 * @return {number}
 */

findSum = (input) => {
  return input.reduce((a, b) => a + b, 0);
};

getInbetween = (input, startIndex, endIndex) => {
  let array = [];
  for (let i = startIndex + 1; i < endIndex; i++) {
    array.push(input[i]);
  }

  return array;
};

var trap = function (input) {
  let i = 0;
  let j = input.length - 1;
  let finalCount = 0;
  let start = 0;
  let end = 0;
  let endIndex = 0;
  let currentHigh = 0;
  let count = 0;
  let currentJ = 0;
  let startIndex = 0;

  while (i < input.length - 1) {
    startIndex = i;
    start = input[i];
    j = input.length - 1;
    endIndex = 0;
    end = 0;
    currentHigh = input[j];
    if (input[i] > 0) {
      while (j > i) {
        currentJ = j;
        if (input[j] > 0) {
          if (input[j] >= start || input[j] >= currentHigh) {
            end = input[j];
            currentHigh = input[j];
            endIndex = j;
          }
        }
        j--;
      }
    }

    if (endIndex > 0) {
      i = endIndex;

      const getInbetweenArray = getInbetween(input, startIndex, endIndex);
      if (input[startIndex] > input[endIndex]) {
        count =
          (endIndex - startIndex - 1) * input[endIndex] -
          findSum(getInbetweenArray);
      } else {
        count =
          (endIndex - startIndex - 1) * input[startIndex] -
          findSum(getInbetweenArray);
      }

      console.log(`start: ${start}, end: ${end}, count: ${count}`);
      finalCount = finalCount + count;
    } else {
      i++;
    }
  }

  console.log(`final count is: ${finalCount}`);
  return finalCount;
};

trap(input);
