from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import model
from config import engine
model.Base.metadata.create_all(bind=engine)



app = FastAPI()

app.add_middleware(
      CORSMiddleware,
      allow_origins=["*"],
      allow_credentials=True,
      allow_methods=["*"],
      allow_headers=["*"],
)


@app.get("/withdraw/{amount}")
async def withdraw():
   
   return {"withdraw": "success"}

@app.get("/balance")
async def balance():
   return {"balance": "500"}

@app.get("/changepin")
async def changepin():
   return {"changepin": "success"}
