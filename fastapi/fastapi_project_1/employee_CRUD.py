from fastapi import FastAPI
from data.employee_data import employees

app = FastAPI()

@app.get("/employees")
def getAllEmployees():
    return employees

@app.get("/employees/{emp_id}")
def getEmployeeById(emp_id:int):
    for employee in employees:
        if employee["id"] == emp_id:
            return employee
    return {"message":"Employee Not Found"}

@app.post("/employees")
def addEmployee(employee:dict):
    employees.append(employee)
    return {"message":"Employee Added Successfully"}    

@app.put("/employees/{emp_id}")
def updateEmployee(emp_id:int, updated_employee:dict):
    for employee in employees:
        if employee["id"] == emp_id:
            employee.update(updated_employee)
            return {"message":"Employee Updated Successfully"}
    return {"message":"Employee Not Found"}

@app.delete("/employees/{emp_id}")
def deleteEmployee(emp_id:int):
    for employee in employees:
        if employee["id"] == emp_id:
            employees.remove(employee)
            return {"message":"Employee Deleted Successfully"}
    return {"message":"Employee Not Found"}