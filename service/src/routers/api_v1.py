from fastapi import APIRouter
from . import todos

router = APIRouter(prefix="/v1")
router.include_router(todos.router)