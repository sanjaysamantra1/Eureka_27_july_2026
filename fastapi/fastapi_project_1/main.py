from fastapi import FastAPI, BackgroundTasks
from routes.employee_routes import router as employee_router
from routes.user_routes import router as user_router
from routes.auth_routes import router as auth_router
from routes.product_routes import router as product_router
from fastapi.middleware.cors import CORSMiddleware
from db.base import create_tables

app = FastAPI()

create_tables()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://127.0.0.1:5500",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(employee_router)  # register employee_router
app.include_router(auth_router)  # register auth_router
app.include_router(user_router)  # register user_router
app.include_router(product_router)  # register the product_router


def send_email():
    for i in range(50000):
        print(f"Sending email...{i}")
    
@app.get("/test_background")
async def test_background(background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email)
    return {"message": "Registration successful"}
