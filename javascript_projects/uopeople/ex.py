def countdown(n):
    if n <= 0:
        print('Blastoff!')
    else:
        print(n)
        countdown(n - 1)

def countup(n):
    if n >= 0:
        print('Blastoff!')
    else:
        print(n)
        countup(n + 1)

def main():
    number = int(input("Enter a number: "))
    if number > 0:
        countdown(number)
    elif number < 0:
        countup(number)
    else:
        countdown(number)  # or countup(number), depending on the choice

if __name__ == "__main__":
    main()