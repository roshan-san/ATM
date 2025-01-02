import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Icon from './helper/icon'
interface Props {
  link:string
  label:string
  icon:string
}

export  function MenuItem(props:Props) {
  return (
    <Link href={props.link}>
        <Button  className=' h-8 w-64 bg-slate-500 text-white hover:scale-105 transition-colors duration-300'>
            <Icon size='24' name={props.icon} />
            {props.label}
        </Button>
    </Link>
  )
}
