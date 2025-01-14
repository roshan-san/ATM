from pydantic import BaseModel

class ChangePinRequest(BaseModel):
    user_id: int
    old_pin: int
    new_pin: int

class WithdrawRequest(BaseModel):
    user_id: int
    amount: float
