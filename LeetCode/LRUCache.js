class Node {
  constructor(key, value) {
    this.previous = null;
    this.next = null;
    this.key = key;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node(null, null);
    this.tail = new Node(null, null);
    this.head.next = this.tail;
    this.tail.previous = this.head;
  }

  insertNode(key, value, previousNode) {
    let node = new Node(key, value);
    if (previousNode) {
      node.next = previousNode;
      previousNode.previous = node;
      node.previous = this.head;
      this.head.next = node;
    } else {
      node.next = this.tail;
      this.tail.previous = node;
      node.previous = this.head;
      this.head.next = node;
    }

    return node;
  }

  deleteTopNode() {
    if (this.head.next.key) {
      this.head.next = this.head.next.next;
      return true;
    } else {
      return false;
    }
  }

  deleteNode(node) {
    if (node) {
      node.previous.next = node.next;
    }
  }

  deleteNodeBeforeTail() {
    if (this.tail.previous.key) {
      this.tail.previous.previous.next = this.tail;
      this.tail.previous = this.tail.previous.previous;
      return true;
    } else {
      return false;
    }
  }

  printDoublyLinkedList() {
    let iterator = this.head;
    while (iterator) {
      console.log(iterator.key);
      iterator = iterator.next;
    }
  }

  getHead() {
    return this.head;
  }

  getTrail() {
    return this.tail;
  }
}

class LRU {
  constructor(size) {
    this.lruMap = new Map();
    this.SIZE = size;
    this.doublyLinkedList = new DoublyLinkedList();
    this.prevNode = null;
    console.log("null");
  }

  getDoublyLinkedList() {
    return this.doublyLinkedList;
  }

  put(key, value) {
    /*If key already exists in the LRU, we'll delete it from the doublylinkedlist
        and add it to the top of the doublyLinkedList.  
      */
    let node = this.lruMap.get(key);
    let currNode = null;
    if (node !== undefined) {
      this.doublyLinkedList.deleteNode(node);
      if (this.prevNode) {
        currNode = this.doublyLinkedList.insertNode(key, value, this.prevNode);
        this.lruMap.set(key, currNode);
        this.prevNode = currNode;
      } else {
        currNode = this.doublyLinkedList.insertNode(key, value, null);
        this.lruMap.set(key, currNode);
        this.prevNode = currNode;
      }
      if (this.lruMap.size === this.SIZE) {
        this.doublyLinkedList.deleteNodeBeforeTail();
      }
    } else {
      /*
          Delete the last node before the end of the doublyLinkedList and 
          insert new key at the begining of the it.
          */

      if (this.lruMap.size === this.SIZE) {
        this.lruMap.delete(this.doublyLinkedList.tail.previous.key);
        this.doublyLinkedList.deleteNodeBeforeTail();
      }
      currNode = this.doublyLinkedList.insertNode(key, value, this.prevNode);
      this.lruMap.set(key, currNode);
      this.prevNode = currNode;
    }

    console.log("null");
  }

  get(key) {
    let node = this.lruMap.get(key);
    let currNode = null;
    if (node === undefined) {
      //console.log(`Does not exists, returning -1`);
      console.log(`-1`);
      return -1;
    } else {
      if (this.SIZE > 1) {
        this.doublyLinkedList.deleteNodeBeforeTail();
      }

      currNode = this.doublyLinkedList.insertNode(
        key,
        node.value,
        this.prevNode
      );
      this.prevNode = currNode;

      console.log(node.value);
      return node.value;
    }
  }
}

let lru = new LRU(10);
lru.put(10, 13);
lru.put(3, 17);
lru.put(6, 11);
lru.put(10, 5);
lru.put(9, 10);
lru.get(13);
lru.put(2, 19);
lru.get(2);
lru.get(3);
lru.put(5, 25);
lru.get(8);
lru.put(9, 22);
lru.put(5, 5);
lru.put(1, 30);
lru.get(11);
lru.put(9, 12);
lru.get(7);
lru.get(5);
lru.get(8);
lru.get(9);
lru.put(4, 30);
lru.put(9, 3);
lru.get(9);
lru.get(10);
lru.get(10);
lru.put(6, 14);
lru.put(3, 1);
lru.get(3);
lru.put(10, 11);
lru.get(8);
lru.put(2, 14);
lru.get(1);
lru.get(5);
lru.get(4);
lru.put(11, 4);
lru.put(12, 24);
lru.put(5, 18);
lru.get(13);
lru.put(7, 23);
lru.get(8);
lru.get(12);
lru.put(3, 27);
lru.put(2, 12);
lru.get(5);
lru.put(2, 9);
lru.put(13, 4);
lru.put(8, 18);
lru.put(1, 7);
lru.get(6);
lru.put(9, 29);
lru.put(8, 21);
lru.get(5);
lru.put(6, 30);
lru.put(1, 12);
lru.get(10);
lru.put(4, 15);
lru.put(7, 22);
lru.put(11, 26);
lru.put(8, 17);
lru.put(9, 29);
lru.get(5);
lru.put(3, 4);
lru.put(11, 30);
lru.get(12);
lru.put(4, 29);
lru.get(3);
lru.get(9);
lru.get(6);
lru.put(3, 4);
lru.get(1);
lru.get(10);
lru.put(3, 29);
lru.put(10, 28);
lru.put(1, 20);
lru.put(11, 13);
lru.get(3);
lru.put(3, 12);
lru.put(3, 8);
lru.put(10, 9);
lru.put(3, 26);
lru.get(8);
lru.get(7);
lru.get(5);
lru.put(13, 17);
lru.put(2, 27);
lru.put(11, 15);
lru.get(12);
lru.put(9, 19);
lru.put(2, 15);
lru.put(3, 16);
lru.get(1);
lru.put(12, 17);
lru.put(9, 1);
lru.put(6, 19);
lru.get(4);
lru.get(5);
lru.get(5);
lru.put(8, 1);
lru.put(11, 7);
lru.put(5, 2);
lru.put(9, 28);
lru.get(1);
lru.put(2, 2);
lru.put(7, 4);
lru.put(4, 22);
lru.put(7, 24);
lru.put(9, 26);
lru.put(13, 28);
lru.put(11, 26);

//lru.get(2);
//lru.put(2, 6);
//lru.get(1);
//lru.put(1, 5);
//lru.put(1, 2);
//lru.get(1);
//lru.get(2);

//let lru = new LRU(1);
//lru.put(2, 1);
//lru.get(2);

//let lru = new LRU(4);
//lru.put(10, 10);
//lru.put(20, 20);
//lru.put(30, 30);
//lru.put(40, 40);
//lru.put(50, 50);
//lru.put(60, 60);

//lru.get(60);
//lru.get(50);
//lru.get(40);
//lru.get(30);
//lru.get(20);
//lru.get(10);

//let lru = new LRU(2);
//lru.put(1, 1);
//lru.put(2, 2);
//lru.get(1);
//lru.put(3, 3);
//lru.get(2);
//lru.put(4, 4);
//lru.get(1);
//lru.get(3);
//lru.get(4);

//lru.put(30, 30);
//lru.put(40, 40);
//lru.put(50, 50);
//lru.put(60, 60);

//lru.get(60);
//lru.get(50);
//lru.get(40);
//lru.get(30);
//lru.get(20);
//lru.get(10);

//let doublyLinkedList = lru.getDoublyLinkedList();
//doublyLinkedList.printDoublyLinkedList();

/*
  let doublyLinkedList = new DoublyLinkedList();
  let lruMap = new Map();
  let node1 = doublyLinkedList.insertNode(10, 10, null);
  lruMap.set(10, node1);
  
  let node2 = doublyLinkedList.insertNode(20, 20, node1);
  lruMap.set(20, node2);
  
  let node3 = doublyLinkedList.insertNode(30, 30, node2);
  lruMap.set(30, node3);
  
  let node4 = doublyLinkedList.insertNode(40, 40, node3);
  lruMap.set(40, node4);
  
  let node5 = doublyLinkedList.insertNode(50, 50, node4);
  lruMap.set(50, node5);
  
  let node6 = doublyLinkedList.insertNode(60, 60, node5);
  lruMap.set(60, node6);
  
  let node7 = doublyLinkedList.insertNode(70, 70, node6);
  lruMap.set(70, node7);
  
  let node8 = doublyLinkedList.insertNode(80, 80, node7);
  lruMap.set(80, node8);
  
  let node9 = doublyLinkedList.insertNode(90, 90, node8);
  lruMap.set(90, node9);
  
  let node10 = doublyLinkedList.insertNode(100, 100, node9);
  lruMap.set(100, node10);
  
  let node11 = doublyLinkedList.insertNode(110, 110, node10);
  lruMap.set(110, node11);
  
  let node12 = doublyLinkedList.insertNode(120, 120, node11);
  lruMap.set(120, node12);
  */

//console.log(lruMap.get(10));
//console.log(lruMap.get(20));
//console.log(lruMap.get(30));
//console.log(lruMap.get(40));
//console.log(lruMap.get(50));
//console.log(lruMap.get(60));

//console.log(`size of the map --- ${lruMap.size}`);

//console.log(node2);
//doublyLinkedList.deleteNode(node6);
//console.log(node8);
//doublyLinkedList.deleteNodeBeforeTail();
//doublyLinkedList.printDoublyLinkedList();
//console.log(doublyLinkedList);
/*let node1 = new node(10);
  let node2 = new node(20);
  node2.previous = node1;
  node1.next = node2;
  let node3 = new node(30);
  node2.next = node3;
  node3.previous = node2;
  console.log(node1.next.next.key);*/
