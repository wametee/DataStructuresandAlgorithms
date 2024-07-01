
// Write a function that takes an array of integers as input and returns the sum of the integer 1 and the first integer in the array.
//   Write a function that takes an array of integers as input and returns the sum of all the integers in the array. The function should iterate through every element in the array and sum them up.
// Write a function that takes an array of integers as input and generates all possible pairs of numbers in the array. For each number in the array, the function should iterate through every other number and generate pairs.



function f1(a) {
    return 1 + a[0];
}

function f2(a) {
    return a.reduce((sum, value) => sum + value, 0);
}

function f3(a) {
    const pairs = [];
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length; j++) {
            pairs.push([a[i], a[j]]);
        }
    }
    return pairs;
}

// Measure execution time for each function
function measureTime(func, a) {
    const startTime = performance.now();
    const result = func(a);
    const endTime = performance.now();
    return endTime - startTime;
}

// Testing the functions with arrays of length 1 to 1000
for (let n of [1, 10, 100, 1000]) {
    const a = Array.from({ length: n }, () => Math.floor(Math.random() * 100));
    console.log(`Array length: ${n}`);
    
    const timeF1 = measureTime(f1, a);
    console.log(`f1(a) execution time: ${timeF1.toFixed(8)} milliseconds`);
    
    const timeF2 = measureTime(f2, a);
    console.log(`f2(a) execution time: ${timeF2.toFixed(8)} milliseconds`);
    
    const timeF3 = measureTime(f3, a);
    console.log(`f3(a) execution time: ${timeF3.toFixed(8)} milliseconds`);
    console.log('---');
}
