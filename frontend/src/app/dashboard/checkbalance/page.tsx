"use client"
import React, { useEffect, useState } from 'react'; 
import { Loading } from '../_components/loading';  // Assuming you have a Loading component

export default function Page() {
  const [balance, setBalance] = useState(0); 
  const [loading, setLoading] = useState(true); // State for loading
  const userId = 1;

  useEffect(() => {
    const fetchBalance = async () => {
      setLoading(true);  // Set loading to true before the request
      try {
        const response = await fetch(`http://127.0.0.1:8000/check-balance/${userId}`); 
        if (response.ok) {
          const data = await response.json();
          setBalance(data.balance);
        } else {
          console.error('Failed to fetch balance:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching balance:', error);
      } finally {
        setLoading(false);  // Set loading to false after the request is completed
      }
    };

    fetchBalance();
  }, [userId]);

  return (
    <div className='flex items-center justify-center pt-16' >
      {loading ? (
        <Loading /> // Assuming you have a Loading component to show while loading
      ) : (
        <p>Available Balance: {balance}</p> // Display the balance once loading is complete
      )}
    </div>
  );
}
