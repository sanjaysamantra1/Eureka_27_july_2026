from pathlib import Path
import shutil

from fastapi import FastAPI, BackgroundTasks, HTTPException, Query, UploadFile
from routes.employee_routes import router as employee_router
from routes.user_routes import router as user_router
from routes.auth_routes import router as auth_router
from routes.product_routes import router as product_router
from fastapi.middleware.cors import CORSMiddleware
from db.base import create_tables
from core.config import settings

import redis.asyncio as redis
import httpx
import json

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


redis_client = redis.Redis(host="127.0.0.1", port=6379,
    decode_responses=True,
    protocol=2)

WIKIPEDIA_API = "https://en.wikipedia.org/w/api.php"
HEADERS = {
    "User-Agent": "FastAPITrainingApp/1.0 (your-email@example.com)"
}

@app.get("/country")
async def get_country(countryname: str = Query(...)):
    # Normalize country name
    countryname = countryname.strip().lower()

    # Redis key
    redis_key = f"country:{countryname}"

    # ------------------------------------------------
    # 1. Check Redis
    # ------------------------------------------------
    cached_data = await redis_client.get(redis_key)
    if cached_data:
        print("Returning data from Redis")
        return {"source": "redis", "data": json.loads(cached_data)}

    # ------------------------------------------------
    # 2. Data not found in Redis
    #    Call Wikipedia API
    # ------------------------------------------------
    print("Calling Wikipedia API")
    params = {"action": "parse", "format": "json", "page": countryname}
    try:
        async with httpx.AsyncClient(headers=HEADERS) as client:
            response = await client.get(WIKIPEDIA_API, params=params, timeout=10)
            response.raise_for_status()
            wikipedia_data = response.json()

    except httpx.HTTPError as e:
        raise HTTPException(status_code=502, detail=f"Wikipedia API error: {str(e)}")

    # ------------------------------------------------
    # 3. Store Wikipedia response in Redis
    # ------------------------------------------------
    await redis_client.set(redis_key, json.dumps(wikipedia_data))

    # ------------------------------------------------
    # 4. Return response
    # ------------------------------------------------
    return {"source": "wikipedia", "data": wikipedia_data}
