/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai"
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import {Link} from 'react-router-dom'
function Navbar() {

  const [isOpen, setIsOpen] = useState(false)

  const [isDark, setIsDark] = useState(false)

  const darkToggle = () => { 
    setIsDark(!isDark)
  }

  const menuBar = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg items-center bg-gray-900 text-gray-100">
        <div className="flex p-2 align-middle justify-between items-center h-full w-full ">
          <div className="flex flex-auto items-center justify-center text-2xl ">
            <span className='font-bold'>Manish.</span>
          </div>
          <div className="hidden md:flex flex-auto items-center justify-center ">
            <ul className="flex">
              <li>Home</li>
              <li>About</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="hidden md:flex flex-auto items-center justify-center">
          <button onClick={menuBar} className='cursor-pointer'>            
              {!isOpen ? <MdOutlineLightMode  size={30}  /> : <MdOutlineDarkMode size={30} />}
            </button>

          </div>
          <div className="md:hidden flex-auto flex items-center justify-center">
            <button onClick={menuBar}>            
              {!isOpen ? <AiOutlineMenu  size={30}  /> : <AiOutlineCloseCircle  size={30} />}
            </button>

          </div>
        </div>
        <ul className={isOpen ? 'absolute w-full bg-gray-900 text-center md:hidden p-2 ' : 'hidden'}>
            <li className='border-b border-gray-800'>Home</li>
            <li className='border-b border-gray-800'>About</li>
            <li className='border-b border-gray-800'>Skills</li>
            <li className='border-b border-gray-800'>Projects</li>
            <li className='border-b border-gray-800'>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar