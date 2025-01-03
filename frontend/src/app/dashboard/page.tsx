"use client"
import { InputOTP,InputOTPGroup, InputOTPSlot,}from '@/components/ui/input-otp'
import React, { useState } from 'react'
import { MenuItem } from './_components/menu-item'

export default function page() {
  const [Authenticated,setAuthenticated]= useState(true)
  return (<div className=' flex flex-col text-center space-y-6'>
    <p className='font-bold'>CHOOSE OPTION</p>

    {Authenticated ? (
      <div className=' flex flex-col text-center space-y-6'> 
      <MenuItem icon='DollarSign' label="Withdraw Cash" link="/dashboard/withdraw"/>
      <MenuItem icon='Landmark' label="Check Balance" link="/dashboard/checkbalance"/>
      <MenuItem icon='Lock' label="Change Pin No" link="/dashboard/changepin"/>
     
    </div>
      
    ):(
      <div className="text-center justify-center">
        <InputOTP maxLength={4}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
</InputOTP>

    </div>
  )}
  </div>
  )
}
