from fastapi import FastAPI
from starlette.requests import Request
import uvicorn

app = FastAPI()


@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    request.state.db = SessionLocal()
    response = await call_next(request)
    return response
