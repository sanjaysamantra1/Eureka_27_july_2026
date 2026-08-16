class Employee:
    def __init__(self, salary):
        self._salary = salary
        
    def read_salary(self):
        return self._salary
    
    def update_salary(self, value):
        if value < 0:
            print('salary cannot be less than zero')
        else:
            self._salary = value
        

emp1 = Employee(3000)
print(emp1.read_salary())
emp1.update_salary(5000)
print(emp1.read_salary())

