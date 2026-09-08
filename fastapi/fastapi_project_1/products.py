from fastapi import FastAPI
from data.product_data import products

app = FastAPI()

@app.get("/")
def home():
    return {"message":"Home Page"}

@app.get("/products")
def getProducts(category:str | None):
    if category is not None:
        filteredProducts = [
            product
            for product in products
            if product["category"].lower() == category.lower()
        ]
    return filteredProducts


