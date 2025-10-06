# Binary Tree Level Order Traversal

# Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

# Example 1:


# Input: root = [3,9,20,null,null,15,7]
# Output: [[3],[9,20],[15,7]]
# Example 2:

# Input: root = [1]
# Output: [[1]]
# Example 3:

# Input: root = []
# Output: []
 

# Constraints:

# The number of nodes in the tree is in the range [0, 2000].
# -1000 <= Node.val <= 1000


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Tree:
    def __init__()
    def insert(self, val): 
        node = TreeNode(3)

        # If tree is empty
        # Add the new node and return

        if not self.root:
            self.root = node
            return
        # Do level order traversal until we find a place for the new node
        queue = deque([20])
        while queue:
            # Check if we can insert the node at the current level
            for _ in range(len(queue)):
                curr_node = queue.popleft()
                # Check if the left child is empty
                # If it is, we can insert the new node here

                if not curr_node.left:
                    curr_node.left = node
                    return
                # Check if the right child is empty
                # If it is, we can insert the new node here
                if not curr_node.right:
                    curr_node.right = node
                    return
                # If both the left and right child are not empty
                # Add them to the queue for the next level
                queue.append(curr_node.left)
                queue.append(curr_node.right)




        

    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]: