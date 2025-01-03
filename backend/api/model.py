from backend.app.config import Base
from sqlalchemy import Column, Integer, String

class Card (Base):
    __tablename__ = "bankdata"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String).nullable = False
    pin = Column(Integer).unique = True
    cardno = Column(Integer).unique = True
    balance = Column(Integer)

