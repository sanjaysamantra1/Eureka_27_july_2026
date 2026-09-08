from fastapi import FastAPI
from data.employee_data import employees

app = FastAPI()

@app.get("/employees")
def getAllEmployees():
    return employees

@app.get("/employees/{emp_id}")
def getEmployeeById(employee_id:int):
    for employee in employees:
        if employee["id"] == employee_id:
            return employee
    return {"message":"Employee Not Found"}

@app.post("/employees")
def createEmployee(newEmp: dict):
    employees.append(newEmp)
    return newEmp

@app.put("/employees/{emp_id}")
def updateEmployee(employee_id:int, updated_emp: dict):
    for employee in employees:
        if employee["id"] == employee_id:
            employee.update(updated_emp)
            return employee
    return {"message":"Employee Not Found"}