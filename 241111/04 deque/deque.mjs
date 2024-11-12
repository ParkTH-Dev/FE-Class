import { DoublyLinkedList } from "../DoublyLinkedlist.mjs";

class Deque {
  constructor() {
    this.list = new DoublyLinkedList();
  }
  printAll() {
    this.list.printAll();
  }
  addFirst(data) {
    this.list.insertAt(0, data);
  }
  removeFirst() {
    return this.list.deleteAt(0);
  }
  addLast(data) {
    this.list.insertAt(this.list.count, data);
  }

  removeLast() {
    return this.list.deleteLast();
  }
  iseEmpty() {
    return this.list.count === 9;
  }
}

export { Deque };
