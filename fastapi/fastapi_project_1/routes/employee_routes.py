from fastapi import APIRouter, status

from schemas.employee_schema import (
    EmployeeCreate,
    EmployeeResponse
)

from controllers.employee_controller import (
    list_employees,
    find_employee,
    add_employee,
    edit_employee,
    remove_employee
)

router = APIRouter(
    prefix="/employees",
    tags=["Employees"]
)


@router.get("/", response_model=list[EmployeeResponse])
def get_employees():
    return list_employees()


@router.get("/{employee_id}", response_model=EmployeeResponse)
def get_employee(employee_id: int):
    return find_employee(employee_id)


@router.post(
    "/",
    response_model=EmployeeResponse,
    status_code=status.HTTP_201_CREATED
)
def create_employee(employee: EmployeeCreate):
    return add_employee(employee)


@router.put(
    "/{employee_id}",
    response_model=EmployeeResponse
)
def update_employee(
    employee_id: int,
    employee: EmployeeCreate
):
    return edit_employee(employee_id, employee)


@router.delete("/{employee_id}")
def delete_employee(employee_id: int):
    return remove_employee(employee_id)