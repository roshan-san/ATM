"use client"
import React, { useState } from 'react'
import { MenuItem } from './_components/menu-item'

export default function page() {
  const [Authenticated,setAuthenticated]= useState(true)
  return (<div>

    {Authenticated ? (
      <div className=' flex flex-col text-center space-y-6'> 
      <MenuItem icon='DollarSign' label="Withdraw Cash" link="/dashboard/withdraw"/>
      <MenuItem icon='Landmark' label="Check Balance" link="/dashboard/checkbalance"/>
      <MenuItem icon='Lock' label="Change Pin No" link="/dashboard/changepin"/>
     
    </div>
      
    ):(
      <div>
        hello
      </div>
  )}
  </div>
  )
}
