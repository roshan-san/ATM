"use client"
import {useEffect} from 'react'
export default function page() {
  useEffect(()=>{
    const fetchBalance = async () => {
      try {
        const response = await fetch('')
        

    }catch(error){
      console.error('Error fetching balance:', error);
    }
    fetchBalance();
  }
 },[])

  return (
    <div>
       
       
    </div>
  )
}
