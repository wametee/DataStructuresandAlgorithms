package DataStructuresandAlgorithms.Algorithms.ListsVectors;

// import all the classes from the java.util package
import java.util.*;

public class ListVectors {
    public static void main(String[] args) {

        // 1. Creating ArrayList, LinkedList, and Vector
        // ArrayList is a resizable array implementation of the List interface.
        // LinkedList is a doubly-linked list implementation of the List interface.
        // Vector is a thread-safe, dynamically resizing array implementation of the List interface.
        
        // Choose the appropriate collection based on performance needs:
        // - ArrayList: Ideal when frequent random access is required, but insertion and deletion are less frequent.
        // - LinkedList: Ideal for frequent insertions and deletions, as it doesn't require shifting elements.
        // - Vector: Same as ArrayList, but thread-safe, and hence slower due to synchronization overhead.
        
        List<Integer> arrayList = new ArrayList<>();
        List<Integer> linkedList = new LinkedList<>();
        List<Integer> vector = new Vector<>();  // Using Vector can be slower in single-threaded environments due to synchronization.

        // 2. Adding Data
        // Elements are added to the list using the `.add()` method.
        // ArrayList and LinkedList both have dynamic sizing, meaning they grow automatically when capacity is exceeded.
        // Vector's size doubles when full, which might not always be the most efficient growth strategy.

        arrayList.add(10);      // Adding to ArrayList
        arrayList.add(20);      // ArrayList grows dynamically with new elements.
        arrayList.add(30);      // You can add any number of elements.

        linkedList.add(15);     // LinkedList adds nodes, keeping track of both previous and next elements.
        linkedList.add(25);     // This allows for fast insertions and deletions from any position.
        linkedList.add(35);

        vector.add(5);          // Vector is thread-safe, so adding elements in a multi-threaded environment is safe.
        vector.add(50);         // However, this comes with a performance cost due to synchronization.
        vector.add(100);

        // 3. Iterating through ArrayList using a for-loop
        // The for-loop provides random access to elements by index. Best for situations where performance is critical.
        System.out.println("ArrayList using for-loop:");
        for (int i = 0; i < arrayList.size(); i++) { // Direct index access.
            System.out.print(arrayList.get(i) + " "); // Accessing element at index i.
        }
        System.out.println();

        // 4. Iterating using for-each loop
        // The enhanced for-each loop is more concise and avoids index-based access, but doesn't allow modification of the list during iteration.
        System.out.println("LinkedList using for-each:");
        for (Integer value : linkedList) { // Each element is accessed without needing the index.
            System.out.print(value + " ");  // Ideal for read-only iteration.
        }
        System.out.println();

        // 5. Iterating using Iterator
        // The Iterator is a more flexible way of iterating through a collection as it allows for element removal during iteration.
        // This is an ideal choice when you need to modify the collection (e.g., remove elements) while iterating.
        System.out.println("Vector using Iterator:");
        Iterator<Integer> iterator = vector.iterator();  // Getting an Iterator for the Vector.
        while (iterator.hasNext()) { // Loop until all elements are traversed.
            System.out.print(iterator.next() + " ");  // Retrieves the next element.
        }
        System.out.println();

        // 6. Iterating using Enumeration (Only for Vector)
        // Enumeration is a legacy interface, but it still works with Vector. It is somewhat less powerful than Iterator.
        System.out.println("Vector using Enumeration:");
        Enumeration<Integer> enumeration = ((Vector<Integer>) vector).elements();  // Enumeration requires casting the Vector.
        while (enumeration.hasMoreElements()) { // Similar to Iterator.
            System.out.print(enumeration.nextElement() + " ");  // Gets the next element.
        }
        System.out.println();

        // 7. Searching: Check if an element exists
        // `.contains()` checks whether an element exists in the collection. Internally, it uses `.equals()` for comparison.
        // `.indexOf()` returns the index of the first occurrence of the element, or -1 if not found.
        System.out.println("Does ArrayList contain 20? " + arrayList.contains(20));  // true: 20 is in the ArrayList.
        System.out.println("Index of 35 in LinkedList: " + linkedList.indexOf(35));  // 2: 35 is at index 2 in the LinkedList.

        // 8. Sorting: Sort ArrayList and Vector
        // Sorting is possible on any List using the `Collections.sort()` method.
        // The elements in the collection must be Comparable, or you can provide a Comparator.
        Collections.sort(arrayList);  // Sorting ArrayList in ascending order.
        Collections.sort(vector);      // Sorting Vector in ascending order.

        System.out.println("Sorted ArrayList: " + arrayList);
        System.out.println("Sorted Vector: " + vector);

        // 9. Removing elements: Removing by index and by value
        // `.remove()` can be used to remove an element by index or by value. It shifts remaining elements after removal.
        // Removing by index: Shifts the elements after the removed index to the left.
        // Removing by value: If the element exists, it removes the first occurrence of that element.
        arrayList.remove(1);  // Remove element at index 1 (20) from the ArrayList.
        linkedList.remove(Integer.valueOf(25));  // Remove the value 25 from the LinkedList.

        System.out.println("ArrayList after removal: " + arrayList);
        System.out.println("LinkedList after removal: " + linkedList);

        // 10. Size of the collections
        // `.size()` returns the number of elements in the collection.
        // Useful for checking if the collection is empty or for iteration bounds.
        System.out.println("Size of ArrayList: " + arrayList.size());  // Output the current size of the ArrayList.
        System.out.println("Size of LinkedList: " + linkedList.size());  // Output the current size of the LinkedList.
        System.out.println("Size of Vector: " + vector.size());  // Output the current size of the Vector.
    }
}
