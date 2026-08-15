class Employee:
    def __init__(self, empId,name):
        self.empId = empId
        self.name = name
    
    def login(self):
        print(f"{self.name} logged in")
        
    def logout(self):
            print(f"{self.name} logged out")
    
    
class Developer(Employee):
    def __init__(self, empId,name,skill="Java"):
        # self.empId = empId
        # self.name = name
        super().__init__(empId,name)  # invoking parent class's constructor
        self.skill = skill
        
    def write_code(self):
        print(f"{self.name} is writting the code using skill {self.skill}")
        
dev1 = Developer(101,"Manish", "Python")
dev1.login()
dev1.write_code()
dev1.logout()

dev2 = Developer(101,"Manish")
dev2.login()
dev2.write_code()
dev2.logout()
