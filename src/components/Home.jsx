import React from "react";
import { BsChevronCompactDown } from "react-icons/bs";

function Home() {
  return (
    <div className="flex flex-col  w-full bg-gray-800 h-screen items-center justify-evenly">
      <div className="h-[10%]">
        
      </div>

      <div className="text-gray-200 flex-col items-center justify-center h-[80%]">
        <div className="w-screen h-full flex flex-col items-center justify-center">
          <h1 className="font-semibold text-2xl text-center animate-pulse">
            Namasate
          </h1>
          <br />
          <h1 className="font-extrabold text-4xl text-center leading-5">
            I'm <span className="text-amber-500">Manish Meena.</span>
          </h1>
          <br />
          <h2 className="font-bold text-3xl text-center">
            A
            <span className="text-gray-300">
              Full Stack Software Developer
            </span>
          </h2>
        </div>
      </div>

      <div className="h-[10%] flex-col items-center justify-center">
        <BsChevronCompactDown className="text-gray-200" size={50} />
      </div>
    </div>
  );
}

export default Home;
