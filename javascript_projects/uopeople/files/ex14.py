# Read the dictionary from the input file
with open('input_dict.txt', 'r') as file:
    original_dict = eval(file.read())

# Invert the dictionary
inverted_dict = {}
for key, value in original_dict.items():
    if isinstance(value, list):
        for v in value:
            inverted_dict.setdefault(v, []).append(key)
    else:
        inverted_dict.setdefault(value, []).append(key)

# Write the inverted dictionary to the output file
with open('output_dict.txt', 'w') as file:
    for key, value in inverted_dict.items():
        file.write(f"{key}: {', '.join(value)}\n")