import React from 'react'

function Newsletter() {
  return (
    <div className='Newsletter my-20 mx-32 bg-gradient-to-b from-purple-300 to-zinc-200 h-62 rounded-lg p-8'>
    <h1 className='text-4xl font-semibold text-center my-6'>Get Exclusive Offers On Your Email</h1>
    <p className="text-center text-xl">Subscribe to our Newsletter and stay updated</p>
    <div className="flex justify-center mt-4">
      <input type="email" placeholder='Email' className="border border-gray-300 rounded-l-md px-6 py-2 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-transparent" />
      <button className="bg-red-600 hover:bg-zinc-600 text-white font-semibold px-4 py-2 rounded-r-md transition duration-300 " >Subscribe</button>
    </div>
  </div>
  
  )
}

export default Newsletter