from fastapi import HTTPException, status
from ..models.todos import ToDoBaseModel
from bson import ObjectId
from ..db.mongodb import AsyncIOMotorClient, get_database

async def get_collection_todos():
  db: AsyncIOMotorClient = await get_database()
  return db["ticketing"]["tickets"]

async def list_todos():
    todos = []
    todos_db = await get_collection_todos()

    async for todo in todos_db.find():
        todo['id'] = str(todo['_id'])
        todos.append(todo)
    return todos

async def create_todo(todo: ToDoBaseModel):
    todo_dict = todo.model_dump()
    todos_db = await get_collection_todos()
    result = await todos_db.insert_one(todo_dict)
    todo_dict['id'] = str(result.inserted_id)
    return todo_dict

async def delete_todo(todo_id):
    todos_db = await get_collection_todos()
    todo = todos_db.find_one({"_id": ObjectId(todo_id)})

    if not todo:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail='Todo not found!')
    deleted_todo = await todos_db.delete_one({"_id": ObjectId(todo_id)})

    if deleted_todo.deleted_count == 1:
        return f"Todo with ID {todo_id} deleted sucessfully!"
    
    raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Todo not found!")
