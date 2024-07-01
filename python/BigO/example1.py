
# Write a function that takes an array of integers as input and returns the sum of the integer 1 and the first integer in the array.
#   Write a function that takes an array of integers as input and returns the sum of all the integers in the array. The function should iterate through every element in the array and sum them up.
# Write a function that takes an array of integers as input and generates all possible pairs of numbers in the array. For each number in the array, the function should iterate through every other number and generate pairs.

import time
import random

# f1(a) - Sum of 1 and the first integer in the array
def f1(a):
    return 1 + a[0]

# f2(a) - Sum of all integers in the array
def f2(a):
    return sum(a)

# f3(a) - Generate all possible pairs of numbers in the array
def f3(a):
    pairs = []
    for i in a:
        for j in a:
            pairs.append((i, j))
    return pairs

# Measure execution time for each function
def measure_time(func, a):
    start_time = time.time()
    result = func(a)
    end_time = time.time()
    return end_time - start_time, result

# Testing the functions with arrays of length 1 to 1000
for n in [1, 10, 100, 1000]:
    a = [random.randint(0, 100) for _ in range(n)]
    print(f"Array length: {n}")
    
    time_f1, _ = measure_time(f1, a)
    print(f"f1(a) execution time: {time_f1:.8f} seconds")
    
    time_f2, _ = measure_time(f2, a)
    print(f"f2(a) execution time: {time_f2:.8f} seconds")
    
    time_f3, _ = measure_time(f3, a)
    print(f"f3(a) execution time: {time_f3:.8f} seconds")
    print('---')
