employees = [
    { "eId": 101, "name": 'sanjay', "sal": 5000, "gender": 'male' },
    { "eId": 104, "name": 'geeta', "sal": 8000, "gender": 'female' },
    { "eId": 103, "name": 'sameer', "sal": 7000, "gender": 'male' },
    { "eId": 102, "name": 'sita', "sal": 9000, "gender": 'female' },
	{ "eId": 105, "name": 'deepak', "sal": 8000, "gender": 'male' }
]

# 1. declare array of employees & sort them in ascending order (empId)
employees_sorted_eid = sorted(employees,key=lambda emp:emp['eId'])
print(employees_sorted_eid)

# 2. declare array of employees & sort them in ascending order by name.
employees_sorted_name = sorted(employees,key=lambda emp:emp['name'])
print(employees_sorted_name)

# 3. Find the employee with the highest salary
highest_salary_emp = max(employees , key=lambda emp:emp['sal'])
print('highest_salary_emp: ',highest_salary_emp)

# 4. declare array of employees & filter the employees whose salary between 6000 and 8000;
filtered_employees = list(filter(lambda emp:6000<=emp['sal']<=8000,employees))
print('4. employees whose salary between 6000 and 8000',filtered_employees)

# 5. declare array of employees & increase salary of every employee by 10%
employees_increased_sal = list(map(lambda emp:{**emp, "sal":emp["sal"]*1.1} , employees))
print('5. increase salary of every employee by 10%',employees_increased_sal)

# 6. declare array of employees & add "comp:ibm" for all the female employees;
# List Comprehension
# new_list = [expression for item in iterable if condition]
employees_with_comp = [
    {**emp,"comp":'IBM'} if emp["gender"]=="male" else emp
    for emp in employees
]
print('6.add "comp:ibm" to every employee',employees_with_comp)


# 7. add Dept info for each employee
employeeArr = [
    {"eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "reena", "sal": 8000, "gender": "female" }
    ]
departmentArr = [
    { "eId": 101, "dept": "sales" },
    { "eId": 104, "dept": "marketing" }
]
dept_map = {
    d["eId"]:d["dept"]
    for d in departmentArr
}
employees_with_dept = [
    {**emp, "dept": dept_map.get(emp["eId"])}
    for emp in employeeArr
]
print('dept_map:: ',dept_map)
print('employees_with_dept:: ',employees_with_dept)
