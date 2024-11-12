import { DoublyLinkedList } from "./DoublyLinkedlist.mjs";

export class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }
  enqueue(data) {
    this.list.insertAt();
  }
  dequeue() {
    try {
      return this.list.deleteLast();
    } catch (e) {
      return null;
    }
  }
  isEmpty() {
    return this.list.count === 0;
  }
}
