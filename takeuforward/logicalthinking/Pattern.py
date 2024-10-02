class Solution:
    def printSquare(self, N):
        # Loop to print each row
        for i in range(N):
            # Create a row with N stars, each separated by a space
            print("* " * (N - 1) + "*")
