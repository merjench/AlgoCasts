// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;

  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
// we are creating a new node and passing in the existing note and not overriding the old node.
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

module.exports = { Node, LinkedList };
