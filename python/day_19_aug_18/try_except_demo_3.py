print("Program starts here")
cars = ["Tata","Honda"]

try:
    a = int(input("Enter first Number: "))
    b = int(input("Enter second Number: "))
    result = a/b
    print(f"Division of {a} & {b} is: {a/b}")
    print(cars[2])
    
except (ValueError,ZeroDivisionError):
    print("invalid input or division by zero")
   

print("Program ends here")