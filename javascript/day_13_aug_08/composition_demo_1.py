class Address:
    def __init__(self,street,state,pincode):
        self.street = street
        self.state = state
        self.pincode = pincode


class Student:
    def __init__(self,roll, name, course, passyear,address):
        self.roll = roll;
        self.name = name;
        self.course = course;
        self.passyear = passyear;
        self.address = address;
        
    def  __str__(self):
        return f"Roll:{self.roll} Name:{self.name} Course:{self.course}"

add1 = Address('Street-1','Karnataka',560066)
add2 = Address('Street-2','Andhra Pradesh',123456)
       
std1 = Student(1, 'Manish', 'Python', 2025, add1);
std2 = Student(2, 'Rajsekhar', 'React', 2026, add2);

print(std1.name , std1.course)
print(std2.name , std2.course)

print(std1)
print(std2)