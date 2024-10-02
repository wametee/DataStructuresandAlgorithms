// Geek is very fond of patterns. Once his teacher gave him a square pattern to solve
// He gave Geek an integer n and asked him to build a pattern
// Help Geek to build a square pattern with the help of * such that each * is space-separated in each line


class Solution {

    void printSquare(int n) {
       // Loop to print each row
       for (int i = 0; i < n; i++) {
           // Loop to print n stars in each row
           for (int j = 0; j < n; j++) {
               // Print '*' followed by a space if it's not the last column
               if (j < n - 1) {
                   System.out.print("* ");
               } else {
                   System.out.print("*");
               }
           }
           // Move to the next line after each row
           System.out.println();
       }
   }
}