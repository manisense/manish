import React,{useState} from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai"
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import {Link} from 'react-router-dom'
function Navbar() {

  const [isOpen, setIsOpen] = useState(false)
  
  

  const menuBar = () => {
    console.log(isOpen);
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg items-center bg-gray-700 text-white">
        <div className="flex p-2 align-middle justify-between items-center h-full w-full ">
          <div className="flex flex-auto items-center justify-center text-2xl ">
            <span className='font-bold'>Manish.</span>
          </div>
          <div className="hidden md:flex flex-auto items-center justify-center ">
            <ul className="flex">
              <li>Home</li>
              <li>Profile</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="hidden md:flex flex-auto items-center justify-center">
            <MdOutlineLightMode color="white" size={30} className='cursor-pointer'/>
            <MdOutlineDarkMode color="white" size={30} className='cursor-pointer'/>
          </div>
          <div className="md:hidden flex-auto flex items-center justify-center">
            <button onClick={menuBar}>            
              {!isOpen ? <AiOutlineMenu color="white" size={30}  /> : <AiOutlineCloseCircle color="white" size={30} />}
            </button>

          </div>
        </div>
        <ul className={isOpen ? 'absolute w-full bg-gray-700 text-center md:hidden p-2 ' : 'hidden'}>
            <li className='border-b border-gray-400'>Home</li>
            <li className='border-b border-gray-400'>Profile</li>
            <li className='border-b border-gray-400'>About</li>
            <li className='border-b border-gray-400'>Contact</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar