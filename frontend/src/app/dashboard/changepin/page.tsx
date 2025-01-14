'use client'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import React, { useRef, useState, useEffect } from 'react'

export default function Page() {
  const [oldpin, setOldPin] = useState('');
  const [newpin, setNewPin] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const newPinRef = useRef<HTMLInputElement | null>(null);
  const userid = 1;

  async function handleSubmit() {
    setLoading(true);
    setMessage(''); // Reset previous message before submitting a new one
    try {
      const response = await fetch('http://127.0.0.1:8000/change-pin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: Number(userid),
          old_pin: Number(oldpin),
          new_pin: Number(newpin),
        }),
      });

      setLoading(false);
      const data = await response.json();
      setMessage(data.message);

    } catch (error) {
      console.error('Error changing PIN:', error);
      setLoading(false);
      setMessage('An error occurred while processing your request.');
    }
  }

  useEffect(() => {
    if (oldpin.length === 4) {
      newPinRef.current?.focus();
    }
  }, [oldpin]);

  useEffect(() => {
    if (newpin.length === 4) {
      console.log('New PIN:', newpin);
    }
  }, [newpin]);

  return !message ? (
    <div className="space-y-6 flex flex-col text-center">
      <div className="flex flex-col items-center space-y-6">
        <div>Enter your current PIN</div>
        <InputOTP
          maxLength={4}
          value={oldpin}
          onChange={(value) => setOldPin(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>

        <div>Enter your new PIN</div>
        <InputOTP
          maxLength={4}
          ref={newPinRef}
          value={newpin}
          onChange={(value) => setNewPin(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <div>
        <Button
          className="bg-green-500 hover:-translate-y-2"
          onClick={handleSubmit}
          disabled={loading} // Disable the button while loading
        >
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </div>
  ) : (
    <div className="space-y-6 flex items-center justify-center pt-16">
      <p className="pt-10">{message}</p>
    </div>
  );
}
