/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  console.log(nums);
  var leftSum = [];
  var rightSum = [];
  var currentSum = 1;

  nums.forEach((num, index) => {
    if (index === 0) {
      leftSum.push(currentSum);
    } else {
      currentSum = currentSum * nums[index - 1];
      leftSum.push(currentSum);
    }
  });

  currentSum = 1;
  var reverseNums = nums.reverse();
  reverseNums.forEach((num, index) => {
    if (index === 0) {
      rightSum.push(currentSum);
    } else {
      currentSum = currentSum * nums[index - 1];
      rightSum.unshift(currentSum);
    }
  });
  console.log(leftSum);
  console.log(rightSum);
  leftSum.forEach((num, index) => {
    rightSum[index] *= num;
  });

  console.log(rightSum);
  return rightSum;
};

productExceptSelf([4, 5, 1, 8, 2]);

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  var leftSum = [];
  var rightSum = [];
  var currentSum = 1;

  nums.forEach((num, index) => {
    if (index === 0) {
      leftSum.push(currentSum);
    } else {
      currentSum = currentSum * nums[index - 1];
      leftSum.push(currentSum);
    }
  });

  currentSum = 1;
  var reverseNums = nums.reverse();
  reverseNums.forEach((num, index) => {
    if (index === 0) {
      rightSum.push(currentSum);
    } else {
      currentSum = currentSum * nums[index - 1];
      rightSum.unshift(currentSum);
    }
  });
  leftSum.forEach((num, index) => {
    rightSum[index] *= num;
  });
  return rightSum;
};
