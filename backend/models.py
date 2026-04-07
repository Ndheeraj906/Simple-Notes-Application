from sqlalchemy import Column, Integer, Text, DateTime
from sqlalchemy.sql import func
from pydantic import BaseModel, field_validator
from typing import Optional
from datetime import datetime

from database import Base


# SQLAlchemy ORM model
class Note(Base):
    __tablename__ = "notes"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(Text, nullable=False)
    content = Column(Text, nullable=True)
    created_at = Column(DateTime, server_default=func.now())


# Pydantic schemas
class NoteCreate(BaseModel):
    title: str
    content: Optional[str] = None

    @field_validator("title")
    @classmethod
    def title_must_not_be_empty(cls, v: str) -> str:
        if not v.strip():
            raise ValueError("Title must not be empty")
        return v.strip()


class NoteResponse(BaseModel):
    id: int
    title: str
    content: Optional[str]
    created_at: datetime

    model_config = {"from_attributes": True}
