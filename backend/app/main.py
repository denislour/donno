import uvicorn
from fastapi import APIRouter, FastAPI

from app.api.api_v1.routers.product import product_router

app = FastAPI()
router = APIRouter()


@router.get('/')
async def home():
    return "Ahihi"


app.include_router(router)
app.include_router(product_router)


def start():
    uvicorn.run("app.main:app", host="localhost", port=8000, reload=True)


# Integrate SQL model instead sqlalchemy
# Documentation all step
# 1. Prepare poetry and project from youtube
# 2. Check architucture from orchild project
# 3. Integrate from sqlmodel
