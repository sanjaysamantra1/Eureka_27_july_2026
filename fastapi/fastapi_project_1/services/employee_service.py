from data.employee_data import employees


def get_all_employees():
    return employees

def get_employee(employee_id: int):
    for employee in employees:
        if employee["id"] == employee_id:
            return employee
    return None

def create_employee(data):
    new_employee = {
        "id": len(employees) + 1,
        "name": data.name,
        "role": data.role,
        "salary": data.salary,
        "status": data.status,
        "gender": data.gender
    }
    employees.append(new_employee)
    return new_employee

def update_employee(employee_id: int, data):
    employee = get_employee(employee_id)
    if not employee:
        return None
    employee["name"] = data.name
    employee["role"] = data.role
    employee["salary"] = data.salary
    employee["status"] = data.status
    employee["gender"] = data.gender
    return employee

def delete_employee(employee_id: int):
    employee = get_employee(employee_id)
    if not employee:
        return None
    employees.remove(employee)
    return employee