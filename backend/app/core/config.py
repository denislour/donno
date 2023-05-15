import os


PROJECT_NAME = "donno"

SQLALCHEMY_DATABASE_URI = os.getenv(
    "DATABASE_URL", "postgresql+asyncpg://postgres:postgres@localhost:5432/donno")

API_V1_STR = "/api/v1"
