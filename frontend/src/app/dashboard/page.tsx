"use client";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import React, { useState } from "react";
import { MenuItem } from "./_components/menu-item";
import { BASE_URL } from "@/lib/backend";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [Authenticated, setAuthenticated] = useState(false);
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(""); 
  const userid = 1;

  async function handleSubmit() {
    setLoading(true);
    setError(""); 
    try {
      const response = await fetch(`${BASE_URL}/checkpass`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: userid,
          pin: Number(pin),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.auth) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
          setError("Incorrect PIN. Please try again."); 
        }
      } else {
        setError("An unexpected error occurred. Please try again later."); 
      }
    } catch (error) {
      console.error(error);
      setError("Failed to connect to the server. Please try again later."); 
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col text-center space-y-6">
      {Authenticated ? (
        <div className="flex flex-col text-center space-y-6">
          <p className="font-bold">Choose Option</p>
          <MenuItem icon="DollarSign" label="Withdraw Cash" link="/dashboard/withdraw" />
          <MenuItem icon="Landmark" label="Check Balance" link="/dashboard/checkbalance" />
          <MenuItem icon="Lock" label="Change Pin No" link="/dashboard/changepin" />
        </div>
      ) : (
        <div className="flex flex-col items-center text-center justify-center space-y-10">
          <p className="font-bold">Enter Your PIN</p>
          <InputOTP maxLength={4} value={pin} onChange={(value) => setPin(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          {error && <p className="text-red-500 font-semibold">{error}</p>} 
          <div>
            <Button
              className="bg-green-500 hover:-translate-y-2"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? "Loading..." : "Done"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
