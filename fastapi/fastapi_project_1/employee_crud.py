from fastapi import FastAPI
from employee_data import employees

app = FastAPI()

@app.get("/employees")
def get_employees():
    return employees

@app.get("/employees/{employee_id}")
def get_employee(employee_id: int):
    for employee in employees:
        if employee["id"] == employee_id:
            return employee
    return {"message": "Employee not found"}

@app.post("/employees")
def create_employee(employee: dict):
    employee["id"] = max(
        [e["id"] for e in employees],
        default=0
    ) + 1
    employees.append(employee)
    return employee

@app.put("/employees/{employee_id}")
def update_employee(employee_id: int, updated_employee: dict):
    for employee in employees:
        if employee["id"] == employee_id:
            employee.update(updated_employee)
            employee["id"] = employee_id
            return employee
    return {"message": "Employee not found"}

@app.delete("/employees/{employee_id}")
def delete_employee(employee_id: int):
    for employee in employees:
        if employee["id"] == employee_id:
            employees.remove(employee)
            return {
                "message": "Employee deleted successfully"
            }
    return {"message": "Employee not found"}