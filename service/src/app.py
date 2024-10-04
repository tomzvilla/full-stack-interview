from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import api_v1
from .db.mongodb_utils import close_mongo_connection, connect_to_mongo
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_event_handler("startup", connect_to_mongo)
app.add_event_handler("shutdown", close_mongo_connection)

app.include_router(api_v1.router)
