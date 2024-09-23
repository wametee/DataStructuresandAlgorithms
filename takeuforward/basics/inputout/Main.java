
//   import the necessary libraries
import java.util.Scanner;

public class Main {
    // declare the main method
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter a positive integer: ");
        int number = scanner.nextInt();

        if (number <= 0) {
            System.out.println("Invalid input! Please enter a positive integer.");
        } else {
            int sum = 0;
            for (int i = 1; i <= number; i++) {
                sum += i;
            }
            //  output data with System.out.printf
            //  The printf method automatically adds a newline character at the end of the printed text
            System.out.printf("The sum of the first %d natural numbers is: %d%n", number, sum);
        }

        scanner.close();
    }
}