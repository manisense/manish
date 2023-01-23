import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import {
  SiCss3,
  SiNodedotjs,
  SiTailwindcss,
  SiJavascript,
  SiCplusplus,
  SiBootstrap,
  SiPython
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { TbBrandReactNative } from "react-icons/tb";
import Marquee from  "react-fast-marquee";


function Skill() {
  return (
    <div className="w-100 h-80  bg-gray-800 text-gray-200 flex items-center justify-center flex-col">
      <div className="font-semibold text-3xl text-center animate-pulse mb-10">
        Skills
      </div>
      <div className='flex mt-10'>
      <Marquee  pauseOnHover={true} speed={80}>
      <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <AiFillHtml5 size={85} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">HTML</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <SiCss3 size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">css</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <SiJavascript size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">Javascript</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <SiTailwindcss size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">TailwindCSS</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <SiBootstrap size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">Bootstrap</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <FaReact size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">ReactJS</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <TbBrandReactNative size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">ReactNative</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <DiMysql size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">MySQL</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <SiNodedotjs size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">NodeJS</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <SiCplusplus size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">CPlusPlus</h1>
          </div>
        </div>
        <div className="container flex items-center justify-center flex-wrap ">
          <div className="flex flex-col  max-w-xs  justify-center items-center p-1 m-1">
            <SiPython size={80} className='cursor-pointer'/>
            <h1 className="text-white text-2xl">Python</h1>
          </div>
        </div>
      </Marquee>
        
      </div>
    </div>
  );
}

export default Skill;
