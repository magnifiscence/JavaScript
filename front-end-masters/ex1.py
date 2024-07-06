def calculate_total(item1, item2=None, item3=None):
    """This function calculates the total cost for a customer based on the items purchased, applying discounts where applicable."""
    
    # Prices of the individual items
    price_item1 = 50  # Price of item 1
    price_item2 = 30  # Price of item 2
    price_item3 = 20  # Price of item 3
    
    # Initialize the total cost
    total_cost = 0
    
    # Add prices of the selected items
    if item1:
        total_cost += price_item1
    if item2:
        total_cost += price_item2
    if item3:
        total_cost += price_item3
    
    # Determine discount based on the number of items purchased
    items_purchased = [item1, item2, item3]
    num_items = sum(item is not None for item in items_purchased)
    
    if num_items == 3:
        total_cost *= 0.75  # Apply 25% discount
    elif num_items == 2:
        total_cost *= 0.90  # Apply 10% discount
    
    print(f'Total cost for the selected items is: ${total_cost:.2f}')

# Test cases
calculate_total(True, True, True)  # All three items - gift pack
calculate_total(True, True)        # Combo of two items
calculate_total(True)              # Single item