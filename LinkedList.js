class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  //getlastNode
  getlastNode() {
    let current = this.head;

    while (current) {
      current = current.next;
    }

    return current;
  }

  //Insert Last Node
  insertLast(data) {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }

    if (current) {
      current.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  //insert at Index

  //Get at index

  //Remove at index

  //Clear List

  //Print list data
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(599);
ll.insertLast(699);
ll.printListData();
