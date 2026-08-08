class Student:
    def __init__(self,roll, name, course, passyear):
        self.roll = roll;
        self.name = name;
        self.course = course;
        self.passyear = passyear;
        
    def  __str__(self):
        return f"Roll:{self.roll} Name:{self.name} Course:{self.course}"


       
std1 = Student(1, 'Manish', 'Python', 2025);
std2 = Student(2, 'Rajsekhar', 'React', 2026);

print(std1.name , std1.course)
print(std2.name , std2.course)

print(std1)
print(std2)