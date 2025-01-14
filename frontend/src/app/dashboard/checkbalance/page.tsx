"use client"
import React, { useEffect, useState } from 'react'; 
import { Loading } from '../_components/loading'; 
import { BASE_URL } from '@/lib/backend';

export default function Page() {
  const [balance, setBalance] = useState(0); 
  const [loading, setLoading] = useState(true); 
  const userId = 1;

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);  
      try {
        const response = await fetch(`${BASE_URL}/check-balance/${userId}`); 
        if (response.ok) {
          const data = await response.json();
          setBalance(data.balance);
        } else {
          console.error('Failed to fetch balance:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      } finally {
        setLoading(false); 
      }
    };

    fetchBalance();
  }, [userId]);

  return (
    <div className='flex items-center justify-center pt-16' >
      {loading ? (
        <Loading /> 
      ) : (
        <p>Available Balance: {balance}</p> 
      )}
    </div>
  );
}
