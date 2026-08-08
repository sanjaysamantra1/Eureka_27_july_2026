class Student:
    orgName = 'Eureka'  # class variable
    def __init__(self,roll, name, course, passyear):
        self.roll = roll;
        self.name = name;  # instance variables
        self.course = course;
        self.passyear = passyear;
        
std1 = Student(1, 'Manish', 'Python', 2025)
std2 = Student(2, 'Rajsekhar', 'React', 2026)

print(std1.name , std1.course, std1.orgName)
print(std2.name , std2.course, std2.orgName)
std1.orgName = "Eureka Infotech"
print(std1.name , std1.course, std1.orgName)
print(std2.name , std2.course, std2.orgName)