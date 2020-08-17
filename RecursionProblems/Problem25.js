const { Node, BinarySearchTree } = require("../Algorithms/BinarySearchTree");

/*
For this problem I'm using Binary Search Tree as a Brinary Tree.....
Left node being small, right node being larger than the current node
does not apply in this case.
*/

//E.g., 1 input tree...
/*
const headNode = new Node(3);
const binarySearchTree = new BinarySearchTree(headNode);

binarySearchTree.getHead().left = new Node(2);
binarySearchTree.getHead().left.left = new Node(5);
binarySearchTree.getHead().left.right = new Node(4);
binarySearchTree.getHead().left.right.left = new Node(1);
binarySearchTree.getHead().left.right.right = new Node(2);

binarySearchTree.getHead().right = new Node(2);
binarySearchTree.getHead().right.left = new Node(4);
binarySearchTree.getHead().right.right = new Node(5);
binarySearchTree.getHead().right.left.left = new Node(2);
binarySearchTree.getHead().right.left.right = new Node(1);

binarySearchTree.isTreePalindrome(headNode);
*/

//E.g., 2 input tree..
const headNode = new Node(3);
const binarySearchTree = new BinarySearchTree(headNode);

binarySearchTree.getHead().left = new Node(1);
binarySearchTree.getHead().left.left = new Node(1);
binarySearchTree.getHead().left.right = new Node(2);

binarySearchTree.getHead().right = new Node(1);
binarySearchTree.getHead().right.left = new Node(1);
binarySearchTree.getHead().right.right = new Node(2);

binarySearchTree.isTreePalindrome(headNode);
