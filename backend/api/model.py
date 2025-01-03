from sqlalchemy import Column, Integer, String, ForeignKey
from database import Base

class Card(Base):
    __tablename__ = "bankdata"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True,nullable=False)
    pin = Column(Integer, nullable=False)
    balance = Column(Integer,default=0)