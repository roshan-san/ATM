from typing import List, Optional,Generic, TypeVar
from pydantic import BaseModel, Field
from pydantic.generics import GenericModel

T=TypeVar('T')

class Card(BaseModel):
    id:Optional[int]=None
    name:Optional[int]=None
    pin:Optional[int]=None
    cardno:Optional[int]=None
    balance:Optional[int]=None
    class Config:
        orm_mode=True