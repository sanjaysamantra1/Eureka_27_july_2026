class Employee:
    def __init__(self, empId,name):
        self.empId = empId
        self.name = name
        
    def login(self):
        print(f"{self.name} logged in")
        
    def logout(self):
            print(f"{self.name} logged out")
    
    
class Developer(Employee):
    def __init__(self, empId,name,skill):
        # self.empId = empId
        # self.name = name
        super().__init__(empId,name)
        self.skill = skill
        
    def write_code(self):
        print(f"{self.name} is writting the code using skill {self.skill}")
        
class Tester(Employee):
    def verify_page(self):
        print(f"{self.name} is testing the page")
        

dev1 = Developer(101,"Manish", "Python")
dev1.login()
dev1.write_code()
dev1.logout()

tester1 = Tester(102,"Mahitha")
tester1.login()
tester1.verify_page()
tester1.logout()