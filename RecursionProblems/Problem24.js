const { Node, BinarySearchTree } = require("../Algorithms/BinarySearchTree");

const setBinaryTree = (inputArr) => {
  const headNode = new Node(inputArr[0]);
  const binarySearchTree = new BinarySearchTree(headNode);
  for (i = 1; i < inputArr.length; i++) {
    binarySearchTree.insertNode(headNode, new Node(inputArr[i]));
  }

  return binarySearchTree;
};

const assendingOrderToBinaryTreeOrder = (arr, brOrderedArr) => {
  if (arr.length > 2) {
    brOrderedArr.push(arr[Math.floor(arr.length / 2)]);
    assendingOrderToBinaryTreeOrder(
      arr.slice(0, Math.floor(arr.length / 2)),
      brOrderedArr
    );
    assendingOrderToBinaryTreeOrder(
      arr.slice(Math.floor(arr.length / 2) + 1, arr.length),
      brOrderedArr
    );
  } else {
    return brOrderedArr.push(...arr);
  }
};

const ordArr = [];
const inArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
assendingOrderToBinaryTreeOrder(inArr, ordArr);
console.log(ordArr);
const binaryTree = setBinaryTree(ordArr);
console.log(JSON.stringify(binaryTree));
