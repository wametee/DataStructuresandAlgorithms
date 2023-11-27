function DoublyLinkedListNode(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
  
  function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
  }
  
  DoublyLinkedList.prototype.insertNodeAtHead = function (data) {
    let newNode = new DoublyLinkedListNode(data);
  
    if (this.head === null) {
      this.head = newNode;
      return this.head;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
    return this.head;
  };
  
  DoublyLinkedList.prototype.insertNodeAtTail = function (data) {
    let newNode = new DoublyLinkedListNode(data);
  
    if (this.head === null) {
      this.head = newNode;
      return this.head;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return this.head;
  };
  
  DoublyLinkedList.prototype.deleteAtHead = function () {
    let toReturn = null;
  
    if (this.head !== null) {
      toReturn = this.head.data;
  
      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    }
    return toReturn;
  };
  
  DoublyLinkedList.prototype.deleteAtTail = function () {
    let toReturn = null;
  
    if (this.tail !== null) {
      toReturn = this.tail.data;
  
      if (this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }
    return toReturn;
  };
  
  DoublyLinkedList.prototype.display = function () {
    let currentNode = this.head;
    console.log(currentNode.data);
    while (currentNode.next !== null) {
      console.log(currentNode.next.data);
      currentNode = currentNode.next;
    }
  
    return null;
  };
  
  const dll = new DoublyLinkedList();
  dll.insertNodeAtHead(1);
  dll.insertNodeAtHead(2);
  dll.insertNodeAtHead(4);
  dll.insertNodeAtHead(3);
  dll.deleteAtHead();
  console.log(dll.display());
  
