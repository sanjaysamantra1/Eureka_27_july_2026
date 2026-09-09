from fastapi import FastAPI
from routes.employee_routes import router as employee_router

app = FastAPI()

app.include_router(employee_router) # register the Routes