from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {"message":"Home Page"}

@app.get("/users")
def getAllUsers():
    return {"message":"Users Page"}

@app.get("/comments")
def getAllComments():
    return {"message":"Comments Page"}

@app.get("/todos")
def getAllTodos():
    return {"message":"Todos Page"}