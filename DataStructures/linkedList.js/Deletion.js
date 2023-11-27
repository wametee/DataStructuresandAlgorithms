SinglyLinkedList.prototype.remove = function (value) {
    var currentHead = this.head;
   
    if (currentHead.data == value) {
     this.head = currentHead.next;
     this.size--;
    } else {
     var prev = currentHead;
     while (currentHead.next) {
      if (currentHead.data == value) {
       prev.next = currentHead.next;
       prev = currentHead;
       currentHead = currentHead.next;
       break; 
       }
       prev = currentHead;
       currentHead = currentHead.next;
    }
   
     if (currentHead.data == value) {
      prev.next = null;
     }
      this.size--;
    }
   };