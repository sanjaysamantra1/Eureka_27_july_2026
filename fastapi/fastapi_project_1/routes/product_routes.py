from operator import or_

from fastapi import APIRouter, Depends, Query
from sqlalchemy.orm import Session

from db.database import get_db
from models.product_model import Product
from schemas.products_schema import ProductResponse

router = APIRouter(prefix="/products", tags=["Products"])


# @router.get("/", response_model=list[ProductResponse])
# def get_products(db: Session = Depends(get_db)):
#     products = db.query(Product).all()
#     return products


@router.get("/", response_model=list[ProductResponse])
def get_products(
    search: str | None = None,
    category: str | None = None,
    min_price: float | None = None,
    max_price: float | None = None,
    in_stock: bool | None = None,
    sort_by: str = Query(default="id"),
    sort_order: str = Query(default="asc"),
    page: int = Query(default=1, ge=1),
    limit: int = Query(default=10, ge=1, le=100),
    db: Session = Depends(get_db),
):
    query = db.query(Product)
    if search:
        query = query.filter(
            or_(
                Product.name.ilike(f"%{search}%"),
                Product.description.ilike(f"%{search}%"),
            )
        )
    if category:
        query = query.filter(Product.category == category)
    if min_price is not None:
        query = query.filter(Product.price >= min_price)
    if max_price is not None:
        query = query.filter(Product.price <= max_price)
    if in_stock is True:
        query = query.filter(Product.stock > 0)
    elif in_stock is False:
        query = query.filter(Product.stock == 0)
    sort_columns = {
        "id": Product.id,
        "name": Product.name,
        "price": Product.price,
        "category": Product.category,
        "stock": Product.stock,
    }
    sort_column = sort_columns.get(sort_by, Product.id)
    if sort_order.lower() == "desc":
        query = query.order_by(sort_column.desc())
    else:
        query = query.order_by(sort_column.asc())
    offset = (page - 1) * limit
    query = query.offset(offset).limit(limit)
    return query.all()
