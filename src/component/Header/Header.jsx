import { Moon, Sun } from 'lucide-react'
import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='bg-gradient-to-r from-pink-400 to-red-500 w-[100%] h-[180px] flex items-center p-2 justify-around'>
      <div className='w-[375px] sm:w-[400px] md:w-[600px] rounded p-2'>
        <h1 className='lg:text-6xl md:text-5xl sm:text-3xl text-4xl font-extrabold text-white'>Surprise Gift Card</h1>
        <p className='text-green-100 font-extrabold text-left text-[10px] sm:text-1xl md:text-[16px] mt-2'>Managed by Mveer745</p>
      </div>
    </div>
  )
}

export default Header