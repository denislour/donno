from fastapi import APIRouter, Depends
from sqlalchemy import select

from app.api.deps import get_async_session
from app.models.product import Product, ProductCreate, ProductDetail


product_router = r = APIRouter()


@r.get("/products", response_model=list[ProductDetail])
async def list(session=Depends(get_async_session)):
    products = await session.execute(select(Product))
    return products.scalars().all()

@r.post("/products", response_model=ProductDetail)
async def create(product_data: ProductCreate, session=Depends(get_async_session)):
    product = Product(**product_data.dict())
    session.add(product)
    await session.commit()
    await session.refresh(product)

    return product
