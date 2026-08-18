print("Program starts here")

try:
    a = int(input("Enter first Number: "))
    b = int(input("Enter second Number: "))
    result = a/b
    print(f"Division of {a} & {b} is: {a/b}")
    
except ValueError as e:
    print("Error Occured: ",e)
except ZeroDivisionError as e:
    print("Error Occured: ",e)
except:
    print("something went wrong")
   

print("Program ends here")