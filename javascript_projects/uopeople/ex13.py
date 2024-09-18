def invert_dictionary(student_dict):
    # Create an empty dictionary to store the inverted dictionary
    course_dict = {}

    # Iterate over each student and their list of courses
    for student, courses in student_dict.items():
        # Iterate over each course for the current student
        for course in courses:
            # If the course is already a key in the course_dict, append the student to the list
            if course in course_dict:
                course_dict[course].append(student)
            # If the course is not a key, create a new entry with the course as key and student in a list
            else:
                course_dict[course] = [student]
    # Return the inverted dictionary
    return course_dict

# Sample input dictionary
student_courses = {
    'Stud1': ['CS1101', 'CS2402', 'CS2001'],
    'Stud2': ['CS2402', 'CS2001', 'CS1102']
}
# Print the original dictionary
print("Original Dictionary:")
print(student_courses)

# Invert the dictionary
inverted_courses = invert_dictionary(student_courses)
# Print the inverted dictionary
print("\nInverted Dictionary:")
print(inverted_courses)
