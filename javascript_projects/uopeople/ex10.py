# Function to display the first n characters from the left
def display_n_characters(name, n):
    return name[:n]

# Function to count the number of vowels in a string
def count_vowels(name):
    vowels = "aeiouAEIOU"
    count = 0
    for char in name:
        if char in vowels:
            count += 1
    return count

# Function to reverse a string
def reverse_string(name):
    return name[::-1]

# Main Program
if __name__ == "__main__":
    full_name = "Tata Divine" 
    print(f"Full Name: {full_name}")

    # Display n characters from the left
    n = int(input("Enter the number of characters to display from the left: "))
    print(f"First {n} characters from the left: {display_n_characters(full_name, n)}")
    
    # Count the number of vowels
    vowels_count = count_vowels(full_name)
    print(f"Number of vowels in the name: {vowels_count}")

    # Reverse the name
    reversed_name = reverse_string(full_name)
    print(f"Reversed Name: {reversed_name}")