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