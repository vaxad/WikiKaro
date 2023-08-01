import Link from 'next/link'
import React from 'react'
import Search from './Search'

export default function Navbar() {
  return (
    
<nav className="bg-white border-gray-200 dark:bg-gray-900" style={{backgroundColor:'#0d0d0d'}}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="/" className="flex items-center">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">🥸WikiKaro</span>
  </a>
  <Search/>
  </div>
</nav>

  )
}
