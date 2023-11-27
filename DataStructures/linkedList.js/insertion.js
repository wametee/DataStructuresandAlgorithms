SinglyLinkedList.prototype.insert = function (value) {
    const newNode = new SinglyLinkedListNode(value);

    if (this.head === null) {
        this.head - newNode;
    } else {
        this.tail.next = newNode;
    }
    this.size++;
    this.tail = newNode;
}