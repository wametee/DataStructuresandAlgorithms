SinglyLinkedList.prototype.display = function () {
    let currentNode = this.head;
    console.log(currentNode.data);
    while (currentNode.next !== null) {
     console.log(currentNode.next.data);
     currentNode = currentNode.next;
    }
   
    return null;
};