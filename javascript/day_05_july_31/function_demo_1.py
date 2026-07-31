# 1. Function Declaration
def add(a,b):
    print('Addition ',a+b)
add(10,20)


# 2. function expression : function assigned to a variable
def sub(a,b):
    print('Subtraction ',a-b)
subtract = sub
subtract(20,10)
sub(20,10)


# 3. Arrow Function / Lambda Function
mul = lambda a,b : print('multiplication:',a*b)
mul(10,20)

