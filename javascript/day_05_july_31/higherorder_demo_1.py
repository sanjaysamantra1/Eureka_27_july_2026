def addition(a,b):
    return a+b

def subtraction(a,b):
    return a-b

def multiplication(a,b):
    return a*b


def calculate(a,b,operation):
    return operation(a,b)

print(calculate(10,20,addition))
print(calculate(10,20,subtraction))
print(calculate(10,20,multiplication))

# calculate is HigherOrder Function as it takes other functions as arguement
# addition/subtraction/multiplication are callback functions, as they are passed as arguement
