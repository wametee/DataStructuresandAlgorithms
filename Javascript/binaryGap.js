function solution(N) {
    let binaryN = (N >>> 0).toString(2); // Convert N to binary string
    let maxGap = 0;
    let currentGap = 0;
    let countStart = false;

    for (let i = 0; i < binaryN.length; i++) {
        if (binaryN[i] === '1') {
            if (countStart && currentGap > maxGap) {
                maxGap = currentGap;
            }
            countStart = true;
            currentGap = 0;
        } else if (countStart) {
            currentGap++;
        }
    }

    return maxGap;
}

console.log(solution(1041)); // Output: 5
console.log(solution(15));   // Output: 0
console.log(solution(32));   // Output: 0







// Example  10041
// To solve this we need to have pointers i and j 
// Will help us count the number of 0's
// Convert the binary number 10041 to string
// Initiate pointers 1 and j
// Set pointers i & j to 0
// Increment j until it hits a 1
// When j hits a 1, set the value of i to be equal to j (i=j)
// Store the value of (j-i-1) which is the value of the count of the first set 0's
// Repeat for the entire array
// function solution (N){

//     let binaryN = (N >>> 0).toString(2); // Changes binary number to string

//     let maxGap = 0; // Set the max number of binary gaps to 0

//     for(let i = 0; i<binaryN.length; i++){ // Set the conter i to zero and loops through the entire binary length while incrementing by 1
//         for (let j=i; j<binaryN.length; j++){ // Set the counter j to i and loops through the entire binary length while incrementing by 1
//             if (binaryN[i] == 1 && binaryN[j] && i!=j){ // Check whether both i and j are equal to 1 but not equal to each other
//                 if(maxGap< j-i-1){ // Calculate the maximum gap
//                     maxGap = j-i-1
//                 }
//                 i=j
//             }
//         }
//     }
// return console.log(maxGap);
// }

// solution(12147483647)


//const solution = i=>Math.max(...i.toString(2).split(/^0+|1+|0+$/).map(s=>s.length))







// Write a function that returns this values
//Basic requirements
// It is an integer
// Between 1 and 2,147,483,647
// Convert to binary
// Return the length of the largest sequence of zeroes in between ones
// Return 0 if no zeros in between ones 
//Example
// N is integer = 1-2,147,483,647
// N converted Binary (9 = 1001, 529 = 1000010001)
//10000010001 = 5
//1111 = 0
//1001
// In order to find a gap
// Sequential find the find 1 and then the next 1
// Store all the different gap lengths 
// Get the largest number
// Convert this to an array 
// Get the position of each character to better search and index its value


// function solution (N){
//     //Test if our value is an integer
//     //Check to see if its in the range 
//     if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
//         //Convert to Binary
//         const Binary = N.toString(2);
//         // Return default if it doesn't meet the requirements

//         return 0;
//     }
    

// }

// solution(1,2,147,483,647)
