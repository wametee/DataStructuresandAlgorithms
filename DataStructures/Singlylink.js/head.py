#  You are given the head of a Sorted Singly Linked List. Write a function that will
#  take the given head as input, delete all nodes that have a value that is already
#  the value of another node so that each value appears 1 time only and return 
# the linked list, which is still to be a sorted linked list

class Node:
    def __init__(self, value):
        self.val = value
        self.next = None

def removeDupes(head):
    current = head  
    # Start from the head of the list
    
    while current is not None and current.next is not None:
        if current.val == current.next.val:
            # Skip the next node if it's a duplicate
            current.next = current.next.next
        else:
            # Move to the next node if it's not a duplicate
            current = current.next
    
    return head  
    # Return the modified list without duplicates
