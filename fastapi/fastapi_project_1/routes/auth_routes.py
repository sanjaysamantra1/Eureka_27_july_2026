from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from db.database import get_db
from schemas.user_schema import UserCreate, UserResponse, LoginRequest
from services.auth_service import register_user, authenticate_user
from core.security import create_access_token

router = APIRouter(prefix="/auth", tags=["Authentication"])


@router.post(
    "/register", response_model=UserResponse, status_code=status.HTTP_201_CREATED
)
def register(user_data: UserCreate, db: Session = Depends(get_db)):
    try:
        user = register_user(
            db=db,
            username=user_data.username,
            email=user_data.email,
            password=user_data.password,
        )
        return user
    except ValueError as e:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(e))


@router.post("/login")
def login(login_data: LoginRequest, db: Session = Depends(get_db)):
    user = authenticate_user(
        db=db, username=login_data.username, password=login_data.password
    )
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid username or password",
        )
    access_token = create_access_token(data={"sub": str(user.id)})
    return {"access_token": access_token, "token_type": "bearer"}
