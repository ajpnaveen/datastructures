class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(node) {
    this.head = node;
  }

  getHead() {
    return this.head;
  }

  insertNode(currentHead, node) {
    if (node.value <= currentHead.value) {
      if (currentHead.left === null) {
        currentHead.left = node;
      } else {
        this.insertNode(currentHead.left, node);
      }
    } else {
      if (currentHead.right === null) {
        currentHead.right = node;
      } else {
        this.insertNode(currentHead.right, node);
      }
    }
  }

  printTreeAssendingOrder(currentHead) {
    if (currentHead.left) {
      this.printTreeAssendingOrder(currentHead.left);
    }
    console.log(`current head: ${currentHead.value}`);
    if (currentHead.right) {
      this.printTreeAssendingOrder(currentHead.right);
    }
  }

  printTreeDessendingOrder(currentHead) {
    if (currentHead.right) {
      this.printTreeDessendingOrder(currentHead.right);
    }
    console.log(`current head: ${currentHead.value}`);
    if (currentHead.left) {
      this.printTreeDessendingOrder(currentHead.left);
    }
  }

  printTree(nodeQueue) {
    const currentItem = nodeQueue.shift();

    if (currentItem === undefined) {
      return;
    }

    console.log(currentItem.value);
    if (currentItem.left) {
      nodeQueue.push(currentItem.left);
    }

    if (currentItem.right) {
      nodeQueue.push(currentItem.right);
    }

    this.printTree(nodeQueue);
  }
}

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
console.log(`Printing the Binary tree in an order....`);
binarySearchTree.printTree(nodeQueue);
