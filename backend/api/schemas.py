from pydantic import BaseModel

class userinfoRes(BaseModel):
    id:int
    name:str
    balance:int
    class Config:
        orm_mode=True

class withdrawReq(BaseModel):
    amount:int
    
class changepinReq(BaseModel):
    oldpin:int
    newpin:int