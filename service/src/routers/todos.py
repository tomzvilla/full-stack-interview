from fastapi import APIRouter, Path, status
from typing import Annotated
from ..models.todos import ToDoBaseModel, ToDoResponseModel
import src.crud.todos as todos

router = APIRouter(
    prefix="/todos",
    tags=["todos"]
)

@router.get('/', response_model=list[ToDoResponseModel])
async def list_todos():
    todos_list = await todos.list_todos()
    return todos_list

@router.post('/', status_code = status.HTTP_201_CREATED, response_model = ToDoResponseModel) 
async def create_todo(todo: ToDoBaseModel):
    todo_dict = await todos.create_todo(todo)
    return todo_dict

@router.delete('/{todo_id}')
async def delete_todo(todo_id: Annotated[str, Path(title="The id of the todo to delete")]):
    message = await todos.delete_todo(todo_id)
    return {"message": message}
