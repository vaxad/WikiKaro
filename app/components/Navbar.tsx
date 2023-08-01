import Link from 'next/link'
import React from 'react'
import Search from './Search'

export default function Navbar() {
  return (
    <nav style={{fontWeight:'bold', fontSize:20, backgroundColor:'#0c0c0c'}} className='grid grid-rows-1 grid-cols-3 p-2 mx-4 drop-shadow-xl'>
        <h1 className='py-1 col-span-1'>
            <Link href={"/"}>Home</Link>
        </h1>
        <div className='col-span-2'>
        <Search/>
        </div>
    </nav>
  )
}
