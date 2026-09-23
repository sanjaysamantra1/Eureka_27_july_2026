import os

from pydantic_settings import BaseSettings, SettingsConfigDict


SECRET_KEY = "ABCDEF"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
REFRESH_TOKEN_EXPIRE_DAYS = 5


class Settings(BaseSettings):
    database_url: str
    app_name: str
    model_config = SettingsConfigDict(
        env_file=os.getenv("ENV_FILE", ".env.dev")
    )
settings = Settings()