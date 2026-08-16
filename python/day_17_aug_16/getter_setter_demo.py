class Employee:
    def __init__(self, salary):
        self._salary = salary
        
    @property
    def salary(self):
        return self._salary
    
    @salary.setter
    def salary(self, value):
        if value < 0:
            print('salary cannot be less than zero')
        else:
            self._salary = value
        

emp1 = Employee(3000)
print(emp1.salary)
emp1.salary = 5000
print(emp1.salary)

