from pydantic import BaseModel, Field

class ToDoBaseModel(BaseModel):
    title: str = Field(max_length=50, description="The title must be less than 50 characters long", example="This is an OpenAPI example")
    description: str = Field(max_length=250, description="The description must be less than 250 characters long", example="Create documentation with examples")
    estimated_time: int = Field(gt = 0, description="The estimated time must be greater than 0", example=5)

    class Config:
        from_attributes = True

class ToDoResponseModel(ToDoBaseModel):
    id: str | None
