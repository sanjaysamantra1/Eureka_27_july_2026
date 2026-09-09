from fastapi import HTTPException

from services.employee_service import (
    get_all_employees,
    get_employee,
    create_employee,
    update_employee,
    delete_employee
)


def list_employees():
    return get_all_employees()


def find_employee(employee_id: int):
    employee = get_employee(employee_id)
    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )
    return employee


def add_employee(data):
    return create_employee(data)


def edit_employee(employee_id: int, data):
    employee = update_employee(employee_id, data)
    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )
    return employee


def remove_employee(employee_id: int):
    employee = delete_employee(employee_id)
    if not employee:
        raise HTTPException(
            status_code=404,
            detail="Employee not found"
        )
    return {
        "message": "Employee deleted",
        "employee": employee
    }