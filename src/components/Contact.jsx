import React from 'react'

function Contact() {
  return (
    <div className='w-100 h-screen bg-gray-800 text-gray-200 flex items-center justify-center'>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input class="appearance-none text-gray-800  block w-full border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
            <p class="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input class="appearance-none block w-full text-gray-800 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-password">
              E-MAIL
            </label>
            <input class="appearance block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="abc@gmail.com" />
            
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full  px-3">
            <label class="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-city">
              Query
            </label>
            <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque" />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full  px-3">
            
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact