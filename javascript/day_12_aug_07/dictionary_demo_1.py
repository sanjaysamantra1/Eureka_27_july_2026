student = {
    "name" : "Manish",
    "age" : 22,
    "course":"Python",
    "c" : 30
}

print("Name: ",student["name"])  
print("Age: ",student.get("age"))  

c = "course"

print("Course: ",student.get(c))      # looks for "course" key
print("C: ",student.get("c"))         # looks for "c" key
print("C: ",student.get("C"))         # looks for "C" key , None
# print("C-2: ",student["C"])

print('Length: ',len(student))

print('age is present in user? ', "age" in student); # true
print('DOB is present in user? ', "dob" in student); # false


print("all keys: ",student.keys())
print("all values: ",student.values())
print("all items: ",student.items())

student.pop("c")
print("Student object after c is removed: ",student)

student.clear()
print("Student object after clear: ",student)

