import math

def print_circum(radius):
    """This function calculates and prints the circumference of a circle given its radius."""
    circumference = 2 * math.pi * radius  # Calculate circumference using the formula 2πr
    print(f'The circumference of a circle with radius {radius} is {circumference}')  # Print the result

# Calling the function with different radii
print_circum(3)
print_circum(5)
print_circum(7)