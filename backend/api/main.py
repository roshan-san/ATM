from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
from psycopg2.extras import RealDictCursor
from models import WithdrawRequest, ChangePinRequest

DATABASE_URL = "postgresql://neondb_owner:MGe5NDF3crZt@ep-fragrant-snow-a5vl0sw6.us-east-2.aws.neon.tech/neondb?sslmode=require"

def get_db_connection():
    try:
        conn = psycopg2.connect(DATABASE_URL, cursor_factory=RealDictCursor)
        return conn
    except Exception as e:
        print("Error connecting to the database:", e)
        raise HTTPException(status_code=500, detail="Database connection failed")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/change-pin")
def change_pin(request: ChangePinRequest, db=Depends(get_db_connection)):
    with db.cursor() as cursor:
        cursor.execute("SELECT pin FROM users WHERE id = %s", (request.user_id,))
        user = cursor.fetchone()
        if not user or user["pin"] != request.old_pin:
            return {"message": "Incorrect Pin"}
        cursor.execute(
            "UPDATE users SET pin = %s WHERE id = %s",
            (request.new_pin, request.user_id),
        )
        db.commit()
        return {"message": "PIN changed successfully"}

@app.post("/withdraw")
def withdraw(request: WithdrawRequest, db=Depends(get_db_connection)):
    with db.cursor() as cursor:
        cursor.execute("SELECT balance FROM users WHERE id = %s", (request.user_id,))
        user = cursor.fetchone()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        if user["balance"] < request.amount:
            raise HTTPException(status_code=400, detail="Insufficient balance")
        cursor.execute(
            "UPDATE users SET balance = balance - %s WHERE id = %s",
            (request.amount, request.user_id),
        )
        db.commit()
        return {"message": "Withdrawal successful", "remaining_balance": user["balance"] - request.amount}

@app.get("/check-balance/{user_id}")
def check_balance(user_id: int, db=Depends(get_db_connection)):
    with db.cursor() as cursor:
        cursor.execute("SELECT balance FROM users WHERE id = %s", (user_id,))
        user = cursor.fetchone()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return {"user_id": user_id, "balance": user["balance"]}
