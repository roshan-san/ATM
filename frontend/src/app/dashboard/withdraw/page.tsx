'use client'
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Loading } from "../_components/loading";
import { BASE_URL } from '@/lib/backend';

export default function WithdrawPage() {
  const [amount, setAmount] = useState(0);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false); 
  const userId = 1;

  const handleWithdraw = async () => {
    if (amount <= 0) {
      setMessage('Please enter a valid amount to withdraw.');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch(`${BASE_URL}/withdraw`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: userId,
          amount: amount,
        }),
      });

      const data = await response.json();
      setLoading(false); 
      if (response.ok) {
        setMessage(`Withdraw succesfull`);
      } else {
        setMessage(`Error: ${data.detail}`);
      }
    } catch (error) {
      setLoading(false);
      console.error('Error withdrawing money:', error);
      setMessage('An error occurred while processing the withdrawal.');
    }
  };

  return (
    <div className="text-center justify-center">
      <div className="space-y-10">
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <Button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleWithdraw}
          disabled={loading} 
        >
          Withdraw
        </Button>
        {loading ? (
          <Loading /> 
        ) : (
          <p>{message}</p> 
        )}
      </div>
    </div>
  );
}
