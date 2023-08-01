'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { FormEvent } from 'react'

export default function Search() {
    const [search,setSearch] = useState('')
    const router=useRouter()
    const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        router.push(`/${search}/`);
        setSearch('');
    }
  return (
    <form className='w-100 flex justify-center' onSubmit={handleSubmit}>
        <input
            type='text'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder='Search'
            className='w-100 rounded-xl'
            style={{backgroundColor:'#000000'}}
        />
        <button className='p-2 rounded-xl font-bold'>
            😁
        </button>
    </form>
  )
}
