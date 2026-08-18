print("Program starts here")
cars = ["Tata","Honda"]

try:
    a = int(input("Enter first Number: "))
    b = int(input("Enter second Number: "))
    result = a/b
    print(f"Division of {a} & {b} is: {a/b}")
    print(cars[2])
    
except ValueError:
    print("Please Enter Valid Integer")
except ZeroDivisionError:
    print("we cannot devide any number by zero")
except:
    print("something went wrong")

print("Program ends here")