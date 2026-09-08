from fastapi import FastAPI
from data.sample_data import users,comments,todos
from data.product_data import products

app = FastAPI()

@app.get("/")
def home():
    return {"message":"Home Page"}

@app.get("/users")
def getAllUsers():
    return users

@app.get("/users/{user_id}")
def getSpecificUser(user_id:int):
    for user in users:
        if user["id"] == user_id:
            return user
    return {"message": "user not found"}


@app.get("/comments")
def getComments():
     return comments

@app.get("/todos")
def getTodos():
     return todos
 
@app.get("/products")
def getProducts():
     return products
 
