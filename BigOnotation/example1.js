
// Write a function that takes an array of integers as input and returns the sum of the integer 1 and the first integer in the array.
// Write a function that takes an array of integers as input and returns the sum of all the integers in the array. The function should iterate through every element in the array and sum them up.
// Write a function that takes an array of integers as input and generates all possible pairs of numbers in the array. For each number in the array, the function should iterate through every other number and generate pairs.


// Function f1: Takes an array of integers and returns the sum of 1 and the first integer in the array
function f1(a) {
    return 1 + a[0]; // Adds 1 to the first element of the array
}

// Function f2: Takes an array of integers and returns the sum of all integers in the array
function f2(a) {
    return a.reduce((sum, value) => sum + value, 0); // Uses the reduce method to sum up all elements
}

// Function f3: Takes an array of integers and generates all possible pairs of numbers in the array
function f3(a) {
    const pairs = []; // Initialize an empty array to store the pairs
    for (let i = 0; i < a.length; i++) { // Outer loop iterates through each element in the array
        for (let j = 0; j < a.length; j++) { // Inner loop iterates through each element again for pairing
            pairs.push([a[i], a[j]]); // Push the current pair into the pairs array
        }
    }
    return pairs; // Return the array containing all pairs
}

// Function to measure the execution time of a function with a given array input
function measureTime(func, a) {
    const startTime = performance.now(); // Record the start time
    const result = func(a); // Call the function with the array input
    const endTime = performance.now(); // Record the end time
    return endTime - startTime; // Calculate and return the execution time
}

// Testing the functions with arrays of different lengths (1, 10, 100, 1000)
for (let n of [1, 10, 100, 1000]) {
    const a = Array.from({ length: n }, () => Math.floor(Math.random() * 100)); // Create an array of random integers
    console.log(`Array length: ${n}`);
    
    const timeF1 = measureTime(f1, a); // Measure the execution time of f1
    console.log(`f1(a) execution time: ${timeF1.toFixed(8)} milliseconds`);
    
    const timeF2 = measureTime(f2, a); // Measure the execution time of f2
    console.log(`f2(a) execution time: ${timeF2.toFixed(8)} milliseconds`);
    
    const timeF3 = measureTime(f3, a); // Measure the execution time of f3
    console.log(`f3(a) execution time: ${timeF3.toFixed(8)} milliseconds`);
    console.log('---'); // Print a separator for clarity in the output
}
