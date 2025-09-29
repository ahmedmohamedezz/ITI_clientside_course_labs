class Node {
  constructor(value = -1e9) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    //? Structure: 'head' -> node -> node -> 'tail'
    this.head = this.tail = null;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      // if list is empty
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  pop() {
    if (this.head === null) {
      console.error("Can't pop from an empty linked list");
      return;
    }

    let temp = this.tail;
    if (temp.prev) {
      // there is a previous node (the list has more than 1 node)
      this.tail = temp.prev;

      // delete all references to 'temp'. so, garbage collector can erase it from memory
      this.tail.next = null;
      temp = null;
    } else {
      // this is the only node in the list
      this.head = this.tail = null;
    }
  }

  pushLeft(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      // if list is empty
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  popLeft() {
    if (this.head === null) {
      console.error("Can't pop from an empty linked list");
      return;
    }

    let temp = this.head;
    if (temp.next) {
      // there is a next node (the list has more than 1 node)
      this.head = temp.next;

      // delete all references to 'temp'. so, garbage collector can erase it from memory
      this.head.prev = null;
      temp = null;
    } else {
      // this is the only node in the list
      this.head = this.tail = null;
    }
  }

  reverse() {
    let cur = this.head;
    let prev = null;
    // after reverse tail => head
    this.tail = this.head;

    // swap the links of each node (prev -> next, next -> prev)
    while (cur) {
      [cur.next, cur.prev] = [cur.prev, cur.next];
      prev = cur; // assuming this is the last node (tail becomes head after reverse)
      cur = cur.prev;
    }

    this.head = prev;
  }

  print() {
    let cur = this.head;
    let ret = [];
    while (cur !== null) {
      ret.push(cur.val);
      cur = cur.next;
    }

    console.log(ret);
  }
}

// starter code
const lst = new LinkedList();
const container = document.getElementById("container");

function render() {
  container.innerHTML = "";
  let cur = lst.head;
  while (cur) {
    const div = document.createElement("div");
    div.className = "node";
    div.textContent = cur.val;
    container.appendChild(div);
    cur = cur.next;
  }
}

function push() {
  let nodeVal = document.getElementById("val").value;
  if (nodeVal!== "") lst.push(nodeVal);
  render();
}

function pop() {
  lst.pop();
  render();
}

function pushLeft() {
  let nodeVal = document.getElementById("val").value;
  if (nodeVal!== "") lst.pushLeft(nodeVal);
  render();
}

function popLeft() {
  lst.popLeft();
  render();
}

function reverse() {
  lst.reverse();
  render();
}

// begin with 1 node
lst.push(50);
render();
