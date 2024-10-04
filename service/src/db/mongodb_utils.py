import logging

from motor.motor_asyncio import AsyncIOMotorClient
from .mongodb import db

# Ideally you should use env variables for connecting to db
# For the sake of simplicity I will skip this step
MONGODB_URL="mongodb://localhost:27017/"

async def connect_to_mongo():
    logging.info("Connecting to MongoDB...")
    db.client = AsyncIOMotorClient(str(MONGODB_URL))
    logging.info("Connected to MongoDB!")


async def close_mongo_connection():
    logging.info("Disconnecting of MongoDB...")
    db.client.close()
    logging.info("Disconnected of MongoDB!")