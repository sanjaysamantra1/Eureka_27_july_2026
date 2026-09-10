from fastapi import APIRouter, Cookie, Depends, Form, Header, Request, Response, status
from typing import Annotated

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
 

@router.post("/login")
def login(username: str = Form(), password: str = Form()):
    return {"username": username, "password": password}

@router.get("/getCookies") 
def read_all_cookies(request:Request):
    return {
        "message" : "you are on /getCookies Route",
        "method" : request.method,
        "url" : request.url,
        "Cookies" : request.cookies,
    }


@router.get("/", response_model=list[EmployeeResponse])
def get_employees(
    response: Response,
    authorization: str | None = Header(default=None),
    x_request_id: str | None = Header(default=None),
    session_id: Annotated[str | None, Cookie()] = None,
):
    # Response headers sent back to the client
    response.headers["X-Response-ID"] = "response-123"
    response.headers["X-Custom-Header"] = "hello"
    print("cookie: ",session_id)
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