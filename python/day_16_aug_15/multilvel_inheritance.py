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
        super().__init__(empId,name)  # invoking parent class's constructor
        self.skill = skill
        
    def write_code(self):
        print(f"{self.name} is writting the code using skill {self.skill}")

class SeniorDeveloper(Developer):
    def __init__(self, empId,name,skill,exp):
            super().__init__(empId,name,skill)  # invoking parent class's constructor
            self.exp = exp
    def review_code(self):
        print(f"{self.name} has {self.exp} years of exp and  reviewing the code")
        
    
dev1 = Developer(101,"Manish", "Python")
dev1.login()
dev1.write_code()
dev1.logout()

dev2 = SeniorDeveloper(101,"Bhradwaj", "React",5)
dev2.login()
dev2.write_code()
dev2.review_code()
dev2.logout()



