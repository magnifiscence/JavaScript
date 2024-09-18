def division_program():
    try:
        # Prompt user for input
        num1 = float(input("Enter the first number: "))
        num2 = float(input("Enter the second number: "))
        
        # Perform division operation inside try block
        result = num1 / num2
        print(f"The result of the division is: {result}")
    except ZeroDivisionError:
        # Handling the division by zero
        print("Error: Division by zero is not allowed. Please enter a non-zero number for the second number.")

if __name__ == "__main__":
    division_program()