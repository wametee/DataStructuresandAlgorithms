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