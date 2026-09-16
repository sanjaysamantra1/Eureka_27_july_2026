from pydantic import BaseModel

class ProductCreate(BaseModel):
    name: str
    description: str | None = None
    price: float
    quantity: int


class ProductResponse(BaseModel):
    id: int
    name: str
    description: str | None
    price: float
    quantity: int
    model_config = {
        "from_attributes": True
    }