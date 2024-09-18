# Step 1: Initial list of 10 employee names
employeeList = ["Alice Johnson", "Bob Smith", "Charlie Davis", "Diana Moore", "Evan Clark", 
                "Fiona Lewis", "George Hall", "Hannah Scott", "Ivy Green", "Jack Black"]

# Splitting the list into two sub-lists
subList1 = employeeList[:5]  # First 5 names
subList2 = employeeList[5:]  # Last 5 names

print("SubList1:", subList1)
print("SubList2:", subList2)

# Step 2: Add new employee "Kriti Brown" to subList2
subList2.append("Kriti Brown")
print("SubList2 after adding Kriti Brown:", subList2)

# Step 3: Remove the second employee from subList1
subList1.pop(1)  # Removing the second item (index 1)
print("SubList1 after removing second employee:", subList1)

# Step 4: Merge both sub-lists
mergedList = subList1 + subList2
print("Merged List:", mergedList)
# Step 5: Salary list and updating with a 4% raise
salaryList = [50000, 55000, 60000, 65000, 70000, 75000, 80000, 85000, 90000, 95000]
# Giving a rise of 4% to every employee
updatedSalaryList = [salary * 1.04 for salary in salaryList]
print("Updated Salary List after 4% raise:", updatedSalaryList)
# Step 6: Sorting the updated salary list and showing top 3 salaries
sortedSalaryList = sorted(updatedSalaryList, reverse=True)
top3Salaries = sortedSalaryList[:3]
print("Top 3 Salaries after sorting:", top3Salaries)