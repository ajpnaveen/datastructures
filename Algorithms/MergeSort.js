const inputArr = [38, 27, 43, 3, 9, 82, 10];

const mergeSort = (arr) => {
  if (arr.length == 1) {
    return arr;
  }
  if (arr.length > 1) {
    //Split
    const leftArr = mergeSort(arr.slice(0, arr.length / 2));
    const rightArr = mergeSort(arr.slice(arr.length / 2, arr.length));

    //Merge
    const mergedArray = [];
    while (leftArr && leftArr.length > 0 && rightArr && rightArr.length > 0) {
      if (leftArr[0] < rightArr[0]) {
        mergedArray.push(leftArr.shift());
      } else {
        mergedArray.push(rightArr.shift());
      }
    }
    return mergedArray.concat(leftArr, rightArr);
  }
};

const outputArr = mergeSort(inputArr);
console.log(`outputArr: ${outputArr}`);
