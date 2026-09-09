from pydantic import BaseModel

class EmployeeCreate(BaseModel):
    name: str
    role: str
    salary: int
    status: str = "Active"    # field with default value
    gender: str | None = None # Optional field
    
class EmployeeResponse(BaseModel):
    id: int
    name: str
    role: str
    salary: int
    status: str
    gender: str