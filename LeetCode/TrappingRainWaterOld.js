//const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

const input = [4, 2, 3];

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

countTrappedWater = (input) => {
  let bounday1 = null;
  let bounday2 = null;
  let count = 0;
  let finalCount = 0;
  let lowerBoundary = 0;
  let higherBoundary = 0;
  let startingIndex = 0;

  for (let i = 0; i < input.length - 1; i++) {
    if (input[i] > 0) {
      startingIndex = i;
      break;
    }
  }
  const inputNew = input.slice(startingIndex, input.length);

  let lengthOne = 0;
  let flag = true;
  while (lengthOne < inputNew.length - 1) {
    let lengthTwo = lengthOne + 1;
    flag = true;
    while (lengthTwo < inputNew.length) {
      if (inputNew[lengthTwo] >= inputNew[lengthOne]) {
        console.log(
          `lowerBoundary: ${inputNew[lengthOne]}, higherBoundary: ${inputNew[lengthTwo]}`
        );

        const getInbetweenArray = getInbetween(inputNew, lengthOne, lengthTwo);
        finalCount =
          finalCount +
          inputNew[lengthOne] * getInbetweenArray.length -
          findSum(getInbetweenArray);
        lengthOne = lengthTwo;
        flag = false;
        break;
      }
      lengthTwo++;
    }
    if (flag) {
      lengthOne++;
    }
  }

  console.log(finalCount);
  return finalCount;
};

const trappedWaterCount = countTrappedWater(input);
