"use client"
import React, { useEffect, useState } from 'react'; // Adjust the path based on the file location
import { Loading } from '../_components/loading';

export default function Page() {
  const [balance, setBalance] = useState(0); // State to store the balance

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/balance'); 
        if (response.ok) {
          const data = await response.json();
          setBalance(data.balance);
        } else {
          console.error('Failed to fetch balance:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="text-center justify-center">
        <p>Available Balance: {balance}</p>
    </div>
  );
}
