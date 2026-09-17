from sqlalchemy.orm import Session

from core.security import hash_password, verify_password

from repositories.user_repository import (
    get_user_by_username,
    get_user_by_email,
    create_user,
)


def register_user(db: Session, username: str, email: str, password: str):
    existing_username = get_user_by_username(db, username)
    if existing_username:
        raise ValueError("Username already exists")
    existing_email = get_user_by_email(db, email)
    if existing_email:
        raise ValueError("Email already exists")
    hashed_password = hash_password(password)
    print("hellooooo-",password,hashed_password)
    return create_user(
        db=db, username=username, email=email, hashed_password=hashed_password
    )


def authenticate_user(db: Session, username: str, password: str):
    user = get_user_by_username(db, username)
    if not user:
        return None
    if not verify_password(password, user.hashed_password):
        return None
    return user
