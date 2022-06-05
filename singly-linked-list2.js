class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addEnd(val) {
    if (this.head === null) {
      this.head = new Node(val, null);
      return;
    }

    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = new Node(val, null);
  }

  addBeginning(val) {
    const newNode = new Node(val, this.head);
    this.head = newNode;
  }

  removeEnd() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }

    let currNode = this.head;
    while (currNode.next.next) {
      currNode = currNode.next;
    }
    
    const returnVal = currNode.next.val;
    currNode.next = null;
    return returnVal;
  }

  removeBeginning() {
    if (!this.head) return;

    const returnVal = this.head.val;
    this.head = this.head.next;
    return returnVal;
  }
}

const ll = new LinkedList();
ll.addEnd(5);
ll.addEnd(6);
ll.addBeginning(4);
console.log(ll.removeBeginning());
console.log(ll.head);
