class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    console.log(newNode, this.head);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;

    while (currentNode) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    const newNode = new Node(value);
    if (index === 0) {
      return this.prepend(value);
    }
    if (index >= this.length) {
      return this.append(value);
    }

    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
  }
  get(index) {
    let counter = 0;
    let currentNode = this.head;
    if (index < 0 || index + 1 > this.length) return null;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  pop() {
    let current = this.head;
    let newTail = current;
    if (!this.tail) return undefined;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current.value;
  }
  shift() {
    let tempHead = this.head;
    const current = tempHead;
    this.head = current.next;
    this.length--;
    if (!this.length) {
      this.tail = null;
    }
    if (!this.head) return null;
    return tempHead.value;
  }
  unshift(value) {
    const newNode = new Node(value);
    let prevHead = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    newNode.next = prevHead;
    this.head = newNode;
    this.length++;
    return this;
  }
  set(index, value) {
    const found = this.get(index);
    if (!found) return false;
    found.value = value;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }
    const prevNode = this.get(index - 1);
    const removeditem = prevNode.next;

    this.length--;
    prevNode.next = removeditem.next;
    return removeditem.value;
  }
  reverse() {
    let currentHead = this.head;
    this.head = this.tail;
    this.tail = currentHead;
    let next = null;
    let prev = null;
    let count = 0;

    while (count < this.length) {
      next = currentHead.next;
      currentHead.next = prev;
      prev = currentHead;
      currentHead = next;
      count++;
    }
    return this;
  }
}

const myLinkedList = new LinkedList();
// myLinkedList.append(15);
// myLinkedList.prepend(5);
// myLinkedList.insert(0, 3);
// myLinkedList.insert(67, 25);

console.log(myLinkedList);
// console.log(myLinkedList.printList());
// console.log(myLinkedList.shift());
// console.log(myLinkedList.unshift(10));
// console.log(myLinkedList.unshift(5));
// console.log(myLinkedList.unshift("Add Me"));
// console.log(myLinkedList.unshift("Teach Me"));
// console.log(myLinkedList.unshift(99));
// console.log(myLinkedList.unshift(69));
// console.log(myLinkedList.pop());
console.log(myLinkedList.printList());
// console.log(myLinkedList.remove(0));
// console.log(myLinkedList.printList());
// console.log(myLinkedList.reverse());
console.log(myLinkedList.append(3));
console.log(myLinkedList.prepend(2));
// console.log(myLinkedList.append(1));
console.log(myLinkedList.printList());
