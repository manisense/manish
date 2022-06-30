import React from 'react'
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai"
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
      <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg items-center bg-gray-600 text-white">
        <div className="flex p-2 align-middle justify-center items-center h-full w-full ">
          <div className="flex flex-auto items-center justify-center text-xl font-bold">
            <h1>Manish.</h1>
          </div>
          <div className="hidden md:flex flex-auto items-center justify-center ">
            <ul className="flex">
              <li>Home</li>
              <li>Profile</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="hidden md:flex flex-auto items-center justify-center ">
            <MdOutlineLightMode color="white" size={30} />
            <MdOutlineDarkMode color="white" size={30} />
          </div>
          <div className="md:hidden flex-auto flex items-center justify-center">
            <AiOutlineMenu color="white" size={35} />
            <AiOutlineCloseCircle color="white" size={35} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar