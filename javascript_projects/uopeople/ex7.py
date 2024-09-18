import math

def hypotenuse(a, b):
    square_a = a ** 2
    square_b = b ** 2
    sum_of_squares = square_a + square_b
    hypotenuse_length = math.sqrt(sum_of_squares)
    return hypotenuse_length

# Test
print(hypotenuse(3, 4)) # Expected output: 5.0
print(hypotenuse(5, 12)) # Expected output: 13.0
print(hypotenuse(8, 15)) # Expected output: 17.0