# 🧠 Types of Data Structures and Algorithms — Senior Engineer Notes

## 🔍 Overview

Data structures and algorithms (DSA) form the backbone of computer science and software engineering. A deep understanding of them enables scalable systems, efficient computation, and optimized performance — qualities essential in large-scale systems at organizations like Meta and Amazon.

## 🧩 1. Arrays

**Definition:**
A collection of elements stored in contiguous memory locations. Each element can be accessed directly using its index.

**Characteristics:**
- Fixed size
- Constant-time access (O(1)) using index
- Insertion/deletion at arbitrary positions is costly (O(n))

**Real-world use:**
Used heavily in implementing buffers, image data processing, matrix operations, and hash tables.

**Example:**
In Amazon's internal order management system, arrays are used to store daily transaction logs before they are streamed into distributed databases for aggregation.

## 🔁 2. Linked List

**Definition:**
A linear data structure of nodes where each node holds data and a reference (pointer) to the next node.

**Characteristics:**
- Dynamic size
- Efficient insertion/deletion (O(1) at head/tail if pointer known)
- Sequential access (O(n))

**Variants:**
- Singly Linked List
- Doubly Linked List
- Circular Linked List

**Real-world use:**
Used in LRU cache implementations, memory allocators, and undo mechanisms in text editors.

## ⏩ 3. Queue

**Definition:**
A linear structure that follows the First-In-First-Out (FIFO) principle.

**Operations:**
- `enqueue()` → Add element to the rear
- `dequeue()` → Remove element from the front

**Variants:**
- Circular Queue
- Priority Queue
- Double-Ended Queue (Deque)

**Use Cases:**
- Task scheduling in OS and job queues
- Message queues in distributed systems (e.g., AWS SQS, Kafka)

## 🔄 4. Stack

**Definition:**
A linear structure following the Last-In-First-Out (LIFO) principle.

**Operations:**
- `push()` → Add to top
- `pop()` → Remove from top

**Use Cases:**
- Function call management (call stack)
- Undo/Redo operations
- Expression parsing and evaluation

**Complexity:**
- Push/Pop: O(1)

## 🔢 5. HashMap / HashSet

**Definition:**
Structures using hash functions to map keys or items to buckets for constant-time lookup.

### 🔸 HashMap:
- Key–value pair storage
- Efficient retrieval, insertion, and deletion (O(1) on average)
- Collision handling via chaining or open addressing

### 🔸 HashSet:
- Stores unique elements only
- Implemented internally using a HashMap (keys with dummy values)

**Use Cases:**
- **HashMaps** → Caching, routing tables, indexing (e.g., user lookup by ID)
- **HashSets** → Duplicate elimination, membership testing

**Industry Example:**
At Meta, hash structures underpin GraphQL caching layers for fast data retrieval.

## 🔺 6. Graph

**Definition:**
A set of vertices (nodes) connected by edges (relationships).

**Types:**
- Directed / Undirected
- Weighted / Unweighted
- Cyclic / Acyclic

**Representation:**
- Adjacency Matrix (O(V²))
- Adjacency List (O(V + E))

**Algorithms:**
- BFS / DFS (Traversal)
- Dijkstra / Bellman-Ford (Shortest Path)
- Kruskal / Prim (Minimum Spanning Tree)

**Use Cases:**
- Social networks (friend relationships)
- Recommendation systems
- Route optimization (e.g., logistics at Amazon)

## 🌳 7. Tree

**Definition:**
A hierarchical structure where each node has a parent and zero or more children.

**Terminology:**
- **Root** – top node
- **Leaf** – node with no children
- **Height** – longest path from root to leaf

**Common Types:**
- Binary Tree
- Binary Search Tree (BST)
- AVL / Red-Black Tree (Balanced)
- Trie (Prefix Tree)
- Segment Tree, Fenwick Tree (used for range queries)

**Use Cases:**
- File systems, DOM representation, database indexing (B-Trees, B+ Trees)
- Trie used in autocomplete or IP routing

## 🔼 8. Heap (Max Heap / Min Heap)

**Definition:**
A specialized binary tree satisfying the heap property:
- **Max Heap:** parent ≥ children
- **Min Heap:** parent ≤ children

**Operations:**
- Insert (O(log n))
- Extract-Min / Max (O(log n))

**Use Cases:**
- Priority queues, scheduling algorithms, streaming median

**Example:** 
AWS EC2 auto-scaling decisions use heap-like prioritization internally.

## 🧮 9. Matrix

**Definition:**
A two-dimensional array used for tabular data or mathematical computation.

**Use Cases:**
- Machine Learning (linear algebra operations)
- Image representation in pixels
- Dynamic programming problems (e.g., edit distance, pathfinding)

## ⚙️ 10. Algorithms Overview

Every data structure is complemented by algorithms — the logic that manipulates data efficiently.

**Categories:**
- **Sorting:** QuickSort, MergeSort, HeapSort, CountingSort
- **Searching:** Binary Search, DFS, BFS
- **Dynamic Programming:** Memoization, Tabulation (e.g., Knapsack, LIS)
- **Greedy Algorithms:** Kruskal's, Prim's, Huffman Coding
- **Divide and Conquer:** MergeSort, QuickSort, Binary Search

**Performance Focus:**
- Always aim for O(log n) or O(1) operations where possible
- Space-time trade-offs define system scalability — a critical consideration at scale

## 🧠 Senior Engineer Insights

1. **Choose structure based on access vs. mutation trade-offs.**
   For example, arrays are great for indexed reads; linked lists for frequent inserts.

2. **Hash-based structures dominate modern in-memory storage** (e.g., Redis).

3. **Tree-based indexes** (like B+ Trees) remain critical in databases (MySQL, PostgreSQL).

4. **Graphs are exploding in relevance** for recommendation systems, fraud detection, and knowledge graphs.

5. **Always measure time and space complexity empirically,** not just theoretically — large-scale systems often reveal cache and memory behaviors unseen in textbook analysis.

## 🧾 Summary Table

| Data Structure | Access Time | Insertion | Deletion | Use Case |
|---------------|-------------|-----------|----------|----------|
| Array | O(1) | O(n) | O(n) | Static datasets |
| Linked List | O(n) | O(1) | O(1) | Dynamic lists |
| Stack | O(n) | O(1) | O(1) | Recursion, parsing |
| Queue | O(n) | O(1) | O(1) | Scheduling |
| HashMap/Set | O(1)* | O(1)* | O(1)* | Fast lookups |
| Tree | O(log n) | O(log n) | O(log n) | Indexing |
| Heap | O(log n) | O(log n) | O(log n) | Priority queues |
| Graph | O(V+E) | O(1) | O(1) | Networks |
| Matrix | O(1) | O(1) | O(1) | Scientific computing |

*(*average case)*

---

## 📁 Repository Structure

This repository contains implementations and examples of various data structures:

```
DataStructures/
├── README.md                   # This file
├── nemo.js                    # Example implementations
├── Queue.js                   # Queue implementation
├── RomanToInteger.py          # Algorithm example
├── sets.js                    # Set operations
├── stacks.js                  # Stack implementation
├── linkedList.js/             # Linked List implementations
│   ├── Deletion.js
│   ├── displayElements.js
│   ├── doublyDeletion.js
│   ├── doublyInsertion.js
│   ├── doublyLinkedList.js
│   ├── insertion.js
│   └── linkedLIst.js
└── Singlylink.js/
    └── head.py
```

## 🚀 Getting Started

1. Clone this repository
2. Navigate to the specific data structure you want to study
3. Review the implementation files and comments
4. Run the examples to understand the behavior
5. Practice implementing variations and solving related problems

## 📚 Further Learning

- Practice problems on LeetCode, HackerRank, and CodeForces
- Study system design patterns that utilize these data structures
- Explore language-specific implementations and optimizations
- Understand how these structures are used in real-world applications

---

*Happy coding! 🎯*