class Calculator:
    def add(self,a,b):
        print(f"addition of {a} & {b} is {a+b}")
        
    def add(self,a,b,c = 0):
        print(f"addition of {a} & {b} & {c} is {a+b+c}")
        
calc = Calculator()
calc.add(10,20)  # missing 1 required positional argument: 'c'
calc.add(10,20,30)