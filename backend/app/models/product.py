from sqlmodel import SQLModel, Field
from app.models.base import BaseModel


class Product(BaseModel, table=True):
    name: str
    description: str


class ProductCreate(SQLModel):
    name: str
    description: str


class ProductDetail(SQLModel):
    id: int
    name: str
    description: str
