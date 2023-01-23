import React from 'react'

function About() {
  return (
    <div className='w-100 h-screen bg-gray-700 text-gray-200 flex items-center justify-center'>
        <div class="text-center ">
            <h1 className='font-semibold animate-pulse text-2xl'>About Me</h1> <br />
            <h2 className='font-semibold text-xl'>I am a final year undergraduate student<br/> of the department of <br/> <span className='text-amber-400'>Chemistry</span> <br/> at </h2>
            <span className='text-amber-500 text-2xl font-semibold'>IIT KHARAGPUR</span>
        </div>
    </div>
  )
}

export default About