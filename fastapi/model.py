from config import Base
from sqlalchemy import Column, Integer, String

class Card (Base):
    __tablename__ = "bankdata"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    password = Column(String)
    cardno = Column(Integer)
    balance = Column(Integer)

