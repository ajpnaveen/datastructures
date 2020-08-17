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

  printTreeTopDown(nodeQueue) {
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

    this.printTreeTopDown(nodeQueue);
  }

  isTreePalindrome(headNode) {
    const nodeQueue = [];
    const leftBranch = [];
    nodeQueue.push(headNode.left);
    this.breathFirstSearch(nodeQueue, leftBranch, true);

    const rightBranch = [];
    nodeQueue.push(headNode.right);
    this.breathFirstSearch(nodeQueue, rightBranch, false);

    if (JSON.stringify(leftBranch) === JSON.stringify(rightBranch)) {
      console.log("Palindrome...");
    } else {
      console.log("Not a Palindrome...");
    }
  }

  breathFirstSearch(nodeQueue, outputValues, readFromLeft = true) {
    const currentItem = nodeQueue.shift();

    if (currentItem === undefined) {
      return;
    } else {
      outputValues.push(currentItem.value);
    }

    if (readFromLeft) {
      if (currentItem.left) {
        nodeQueue.push(currentItem.left);
      }

      if (currentItem.right) {
        nodeQueue.push(currentItem.right);
      }
      this.breathFirstSearch(nodeQueue, outputValues, true);
    } else {
      if (currentItem.right) {
        nodeQueue.push(currentItem.right);
      }
      if (currentItem.left) {
        nodeQueue.push(currentItem.left);
      }
      this.breathFirstSearch(nodeQueue, outputValues, false);
    }
  }

  _deallocateTreeNodes(head) {
    if (head.left) {
      this._deallocateTreeNodes(head.left);
      delete head.left;
    }
    if (head.right) {
      this._deallocateTreeNodes(head.right);
      delete head.right;
    }

    delete head.value;
    head = null;
  }

  deallocateTreeNodes() {
    this._deallocateTreeNodes(this.head);
  }
}

module.exports = { Node, BinarySearchTree };
