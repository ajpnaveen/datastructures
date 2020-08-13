const { Node, BinarySearchTree } = require("../Algorithms/BinarySearchTree");

console.log(Node);
const headNode = new Node(8);
const binarySearchTree = new BinarySearchTree(headNode);
binarySearchTree.insertNode(headNode, new Node(3));
binarySearchTree.insertNode(headNode, new Node(10));
binarySearchTree.insertNode(headNode, new Node(1));
binarySearchTree.insertNode(headNode, new Node(6));
binarySearchTree.insertNode(headNode, new Node(14));
binarySearchTree.insertNode(headNode, new Node(4));
binarySearchTree.insertNode(headNode, new Node(7));
binarySearchTree.insertNode(headNode, new Node(13));

console.log(`TreeDessendingOrder`);
binarySearchTree.printTreeDessendingOrder(headNode);
console.log(`printTreeAssendingOrder`);
binarySearchTree.printTreeAssendingOrder(headNode);
const nodeQueue = [];
nodeQueue.push(headNode);
console.log(`Printing the Binary tree in an order... Top Down....`);
binarySearchTree.printTreeTopDown(nodeQueue);
console.log(`deallocateTreeNodes....`);
binarySearchTree.deallocateTreeNodes();
//After deallocation of all the nodes in the Tree...
console.log(`After deallocation of all the nodes in the Tree...`);
console.log(headNode);
