import React from 'react'
import {AiFillHeart} from 'react-icons/ai'

function Footer() {
  return (
    <div className='w-screen bg-gray-900 h-[100px] text-gray-100 flex items-center justify-center'>
        <div className='h-30 font-semibold text-xl flex items-center justify-center'> <span>Made With </span><AiFillHeart className='text-red-600 mx-1'/>  <span>By Manish.</span></div>
    </div>
  )
}

export default Footer