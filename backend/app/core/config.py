import os

PROJECT_NAME = "donno"

SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL", "sqlite:///./donno.db")

API_V1_STR = "/api/v1"
