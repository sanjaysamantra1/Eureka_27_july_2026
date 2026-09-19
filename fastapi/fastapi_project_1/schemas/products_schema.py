from pydantic import BaseModel

class ProductResponse(BaseModel):
    id: int
    name: str
    description: str | None
    category: str
    price: float
    stock: int
    is_active: bool

    class Config:
        from_attributes = True
