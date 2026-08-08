class Student:
    def __init__(abcd,roll, name, course, passyear):
        abcd.roll = roll;
        abcd.name = name;
        abcd.course = course;
        abcd.passyear = passyear;
        
std1 = Student(1, 'Manish', 'Python', 2025);
std2 = Student(2, 'Rajsekhar', 'React', 2026);

print(std1.name , std1.course)
print(std2.name , std2.course)

# abcd = current object