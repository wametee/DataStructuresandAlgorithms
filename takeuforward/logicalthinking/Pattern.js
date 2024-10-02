class Solution {
    // Function to print square of N
    printSquare(N) {
        for (let i = 0; i < N; i++) {
            // Create a row of N stars separated by a space
            console.log("* ".repeat(N - 1) + "*");
        }
    }
}
