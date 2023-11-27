function SinglyLinkedListNode(data) {
    this.data = data;
    this.next = null;
  }
  
  function SinglyLinkedList() {
    this.head = null;
    this.size = 0;
  }
  
  SinglyLinkedList.prototype.insert = function (value) {
    const newNode = new SinglyLinkedListNode(value);
  
    if (this.head === null) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
  
    this.size++;
    this.tail = newNode;
  };
  
  SinglyLinkedList.prototype.remove = function (value) {
    let currentHead = this.head;
    if (currentHead.data == value) {
      this.head = currentHead.next;
      this.size--;
    } else {
      let prev = currentHead;
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
  
  SinglyLinkedList.prototype.display = function () {
    let currentNode = this.head;
    console.log(currentNode.data);
    while (currentNode.next !== null) {
      console.log(currentNode.next.data);
      currentNode = currentNode.next;
    }
  
    return null;
  };
  
  const sll = new SinglyLinkedList();
  sll.insert(1);
  sll.insert(2);
  sll.insert(3);
  sll.insert(4);
  sll.insert(5);
  sll.remove(4);
  console.log(sll.display());
  